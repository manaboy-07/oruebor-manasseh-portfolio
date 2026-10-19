"use client";

import { useEffect, useRef, useState } from "react";
import { useMotion } from "./MotionProvider";

export default function OrbitalScene() {
  const host = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const { paused } = useMotion();
  const pausedRef = useRef(paused);
  const invalidate = useRef<() => void>(() => {});
  const [ready, setReady] = useState(false);
  useEffect(() => {
    pausedRef.current = paused;
    invalidate.current();
  }, [paused]);

  useEffect(() => {
    let cancelled = false;
    let dispose: (() => void) | undefined;
    const timer = window.setTimeout(async () => {
      try {
        const THREE = await import("three");
        if (cancelled || !host.current || !canvas.current) return;
        const element = host.current;
        const renderer = new THREE.WebGLRenderer({
          canvas: canvas.current,
          alpha: true,
          antialias: true,
        });
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
        camera.position.z = 8;
        const group = new THREE.Group();
        scene.add(group);
        const mesh = new THREE.Group();
        group.add(mesh);
        const core = new THREE.Mesh(
          new THREE.IcosahedronGeometry(0.8, 1),
          new THREE.MeshStandardMaterial({
            color: 0xc6f768,
            metalness: 0.65,
            roughness: 0.22,
            flatShading: true,
          }),
        );
        mesh.add(core);
        for (let i = 0; i < 3; i++) {
          const ring = new THREE.Mesh(
            new THREE.TorusGeometry(1.55 + i * 0.3, 0.055, 12, 96),
            new THREE.MeshStandardMaterial({
              color: i === 1 ? 0x6d847d : 0xb5e46b,
              metalness: 0.85,
              roughness: 0.3,
            }),
          );
          ring.rotation.set(i * 0.8 + 0.4, i * 0.65, 0.4);
          mesh.add(ring);
          const node = new THREE.Mesh(
            new THREE.IcosahedronGeometry(0.16, 1),
            new THREE.MeshStandardMaterial({
              color: 0xdfffad,
              metalness: 0.45,
              roughness: 0.25,
            }),
          );
          node.position.set(
            Math.cos(i * 2.1) * (1.6 + i * 0.25),
            Math.sin(i * 2.1) * (1.6 + i * 0.25),
            0.3,
          );
          mesh.add(node);
        }
        const wire = new THREE.Mesh(
          new THREE.IcosahedronGeometry(2.35, 1),
          new THREE.MeshBasicMaterial({
            color: 0x91a66f,
            wireframe: true,
            transparent: true,
            opacity: 0.09,
          }),
        );
        group.add(wire);
        group.rotation.set(0.2, -0.3, -0.25);
        scene.add(new THREE.AmbientLight(0xb8d49c, 1.2));
        const light = new THREE.DirectionalLight(0xebffcd, 5);
        light.position.set(-3, 4, 5);
        scene.add(light);
        const rim = new THREE.PointLight(0xb5ff56, 60);
        rim.position.set(3, -1, 2);
        scene.add(rim);
        const blue = new THREE.DirectionalLight(0xa5cad2, 2);
        blue.position.set(-3, -2, -2);
        scene.add(blue);
        const stars = new Float32Array(75 * 3);
        for (let i = 0; i < stars.length; i++)
          stars[i] = (Math.random() - 0.5) * 11;
        const dots = new THREE.BufferGeometry();
        dots.setAttribute("position", new THREE.BufferAttribute(stars, 3));
        scene.add(
          new THREE.Points(
            dots,
            new THREE.PointsMaterial({
              color: 0x8b9c73,
              size: 0.016,
              transparent: true,
              opacity: 0.55,
            }),
          ),
        );
        let frame = 0,
          previous = 0,
          inView = true,
          dirty = true,
          targetX = 0,
          targetY = 0;
        const render = (time: number) => {
          frame = 0;
          if (cancelled || document.hidden || !inView) return;
          if (time - previous < 33 && !dirty) {
            frame = requestAnimationFrame(render);
            return;
          }
          const dt = Math.min((time - previous) / 1000, 0.05);
          previous = time;
          if (!pausedRef.current) {
            mesh.rotation.y += dt * 0.12;
            mesh.rotation.z += dt * 0.06;
            wire.rotation.y -= dt * 0.04;
            group.position.y = Math.sin(time * 0.0006) * 0.08;
            group.rotation.x += (targetX - group.rotation.x) * 0.02;
            group.rotation.y += (targetY - group.rotation.y) * 0.02;
          }
          renderer.render(scene, camera);
          dirty = false;
          if (!pausedRef.current) frame = requestAnimationFrame(render);
        };
        const wake = () => {
          dirty = true;
          if (!frame && !document.hidden && inView)
            frame = requestAnimationFrame(render);
        };
        invalidate.current = wake;
        const resize = () => {
          const width = element.clientWidth,
            height = element.clientHeight;
          if (!width || !height) return;
          renderer.setPixelRatio(
            Math.min(devicePixelRatio, innerWidth < 700 ? 1.25 : 1.5),
          );
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          wake();
        };
        const pointer = (event: PointerEvent) => {
          targetY = (event.clientX / innerWidth - 0.5) * 0.5;
          targetX = (event.clientY / innerHeight - 0.5) * 0.3;
        };
        const visibility = () => {
          if (document.hidden) {
            cancelAnimationFrame(frame);
            frame = 0;
          } else wake();
        };
        const observer = new IntersectionObserver((entries) => {
          inView = entries[0].isIntersecting;
          if (inView) wake();
          else {
            cancelAnimationFrame(frame);
            frame = 0;
          }
        });
        const sizes = new ResizeObserver(resize);
        observer.observe(element);
        sizes.observe(element);
        window.addEventListener("pointermove", pointer, { passive: true });
        document.addEventListener("visibilitychange", visibility);
        resize();
        setReady(true);
        dispose = () => {
          cancelAnimationFrame(frame);
          observer.disconnect();
          sizes.disconnect();
          window.removeEventListener("pointermove", pointer);
          document.removeEventListener("visibilitychange", visibility);
          scene.traverse((object) => {
            if (
              object instanceof THREE.Mesh ||
              object instanceof THREE.Points
            ) {
              object.geometry.dispose();
              const materials = Array.isArray(object.material)
                ? object.material
                : [object.material];
              materials.forEach((material) => material.dispose());
            }
          });
          renderer.dispose();
          renderer.forceContextLoss();
          invalidate.current = () => {};
        };
      } catch {
        /* Decorative only: leave the static fallback visible. */
      }
    }, 500);
    return () => {
      cancelled = true;
      clearTimeout(timer);
      dispose?.();
    };
  }, []);

  return (
    <div
      ref={host}
      className={`scene${ready ? " ready" : ""}`}
      aria-hidden="true"
    >
      <canvas ref={canvas} />
      <div className="scene-fallback">✳</div>
      <span className="scene-label">ORBITAL SYSTEM / 002</span>
      <span className="scene-hint">MOVE TO EXPLORE</span>
    </div>
  );
}
