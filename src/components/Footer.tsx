import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section">
      <p className="eyebrow">STILL CURIOUS. STILL BUILDING.</p>
      <a className="footer-link" href="mailto:manassehoruebor@gmail.com">
        Let’s build something.<span>↗</span>
      </a>
      <div className="footer-social">
        <a
          href="https://www.linkedin.com/in/manasseh-oruebor-769b041a6/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/manaboy-07"
          rel="noreferrer"
          target="_blank"
        >
          GitHub ↗
        </a>
        <Link href="/privacy/">Privacy policy</Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 MANASSEH ORUEBOR</span>
        <span>MADE OF CURIOSITY &amp; CODE</span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
