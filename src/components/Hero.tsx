import OrbitalScene from "./OrbitalScene";
import { MotionToggle } from "./MotionProvider";
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-top">
        <span className="eyebrow">
          FULL-STACK DEVELOPER / ASPIRING CLOUD ENGINEER
        </span>
        <span className="edition">
          BASED IN NIGERIA · BUILDING FOR EVERYWHERE
        </span>
      </div>
      <div className="hero-copy">
        <p className="kicker">
          Manasseh Oruebor · AWS Certified Cloud Practitioner
        </p>
        <h1>
          <span>I turn ideas</span>
          <span>
            into <em>working</em>
          </span>
          <span>
            <em>things.</em>
            <b className="asterisk">✳</b>
          </span>
        </h1>
        <p className="intro">
          I build web applications with Next.js and NestJS.
          <br />
          Now taking that work further into cloud engineering,
          <br className="desktop" /> one deployment and one project at a time.
        </p>
        <a className="button" href="#work">
          Explore my work <span>↘</span>
        </a>
        <a
          className="hero-social"
          href="https://www.linkedin.com/in/manasseh-oruebor-769b041a6/"
          rel="noreferrer"
          target="_blank"
        >
          Connect on LinkedIn ↗
        </a>
      </div>
      <OrbitalScene />
      <div className="hero-bottom">
        <span>NEXT.JS / NESTJS / CLOUD</span>
        <a href="#work">SCROLL TO DISCOVER ↓</a>
        <MotionToggle />
      </div>
    </section>
  );
}
