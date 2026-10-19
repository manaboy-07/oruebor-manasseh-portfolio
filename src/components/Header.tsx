export default function Header() {
  return (
    <header>
      <a aria-label="Manasseh home" className="brand" href="#home">
        m<span>.</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <a
        className="nav-cta"
        href="https://github.com/manaboy-07"
        rel="noreferrer"
        target="_blank"
      >
        GitHub <span>↗</span>
      </a>
    </header>
  );
}
