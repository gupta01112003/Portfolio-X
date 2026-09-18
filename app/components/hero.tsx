export default function Hero() {
  return (
    <section id="home" className="hero-x">
      {/* Ambient background */}
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* Top technical label */}
      <div className="hero-topline">
        <span>PORTFOLIO / 2026</span>
        <span>BE — E&amp;CS</span>
      </div>

      <div className="hero-inner">
        {/* Left content */}
        <div className="hero-main">
          <p className="hero-eyebrow">
            ELECTRONICS &amp; COMPUTER SCIENCE
          </p>

          <h1 className="hero-title">
            <span className="hero-title-small">Hi, I&apos;m</span>

            <span className="hero-name">
              Aashish
              <br />
              <span>Gupta.</span>
            </span>
          </h1>

          <p className="hero-description">
            I build software, intelligent systems, and digital experiences
            that solve real-world problems.
          </p>

          <div className="hero-actions">
            <a href="#work" className="hero-button hero-button-primary">
              <span>Explore My Work</span>
              <span className="button-arrow">↗</span>
            </a>

            <a href="#contact" className="hero-button hero-button-secondary">
              Let&apos;s Connect
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="hero-core">
            <span>AG</span>
          </div>

          <div className="visual-label visual-label-top">
            <span className="visual-dot" />
            BUILD / CREATE
          </div>

          <div className="visual-label visual-label-bottom">
            SOFTWARE
            <br />
            SYSTEMS
            <br />
            EXPERIENCES
          </div>
        </div>
      </div>

      {/* Bottom information */}
      <div className="hero-bottom">
        <div className="availability">
          <span className="availability-dot" />
          <span>AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </div>
    </section>
  );
}