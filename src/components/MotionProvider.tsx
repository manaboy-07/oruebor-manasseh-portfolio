"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const MotionContext = createContext({ paused: true, toggle: () => {} });
export function useMotion() {
  return useContext(MotionContext);
}
export function MotionToggle() {
  const { paused, toggle } = useMotion();
  return (
    <button id="motion" type="button" aria-pressed={paused} onClick={toggle}>
      {paused ? "Resume motion ▷" : "Pause motion Ⅱ"}
    </button>
  );
}

export default function MotionProvider({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  // SSR and initial hydration agree. Respect the OS setting before enabling motion.
  const [paused, setPaused] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPaused(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useGSAP(
    () => {
      if (paused) return;
      gsap.from(".hero-copy > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
      gsap.utils
        .toArray<HTMLElement>(".reveal", root.current)
        .forEach((element) => {
          gsap.from(element, {
            y: 38,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 92%", once: true },
          });
        });
      gsap.to(".ticker > div", {
        xPercent: -50,
        duration: 35,
        ease: "none",
        repeat: -1,
      });
      gsap.to(".asterisk", {
        rotation: 360,
        duration: 24,
        ease: "none",
        repeat: -1,
      });
      gsap.to(".progress", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
        },
      });
      // useGSAP reverts every tween and ScrollTrigger on pause or unmount.
    },
    { scope: root, dependencies: [paused], revertOnUpdate: true },
  );

  return (
    <MotionContext.Provider
      value={{ paused, toggle: () => setPaused((value) => !value) }}
    >
      <div ref={root}>{children}</div>
    </MotionContext.Provider>
  );
}
