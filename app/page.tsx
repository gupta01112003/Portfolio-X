export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">ELECTRONICS & COMPUTER SCIENCE</p>

          <h1>
            Hi, I&apos;m <span>Aashish Gupta.</span>
          </h1>

          <p className="hero-description">
            I build software, intelligent systems, and digital experiences
            that solve real-world problems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore My Work
            </a>

            <a href="#contact" className="secondary-button">
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div className="hero-status">
          <span className="status-dot"></span>
          <span>Available for opportunities</span>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">01 — WORK</p>

        <h2>Projects I&apos; proud of.</h2>

        <div className="project-grid">
          <article className="project-card">
            <span>01</span>
            <h3>Breast Cancer Detection</h3>
            <p>
              A deep learning system using CNNs for classifying tumors as
              benign or malignant.
            </p>
            <p className="tech-stack">
              Python · TensorFlow · Keras · CNN
            </p>
          </article>

          <article className="project-card">
            <span>02</span>
            <h3>Expense Management System</h3>
            <p>
              A web application for tracking, categorizing, and analyzing
              personal expenses.
            </p>
            <p className="tech-stack">
              React · Node.js · Spring Boot · MySQL
            </p>
          </article>

          <article className="project-card">
            <span>03</span>
            <h3>E-Commerce Website</h3>
            <p>
              A responsive marketplace with product search, filtering, and
              order tracking.
            </p>
            <p className="tech-stack">
              React · Node.js · Python · MongoDB
            </p>
          </article>
        </div>
      </section>

      <section className="section about-section">
        <p className="section-label">02 — ABOUT</p>

        <h2>Engineer. Builder. Problem Solver.</h2>

        <p className="about-text">
          I&apos;m an Electronics & Computer Science engineering student interested
          in software development, artificial intelligence, web technologies,
          and building practical solutions.
        </p>
      </section>

      <section id="contact" className="contact-section">
        <p className="section-label">03 — CONTACT</p>

        <h2>Let&apos;s build something interesting.</h2>

        <p>
          I&apos;m open to internships, software development opportunities, and
          projects where I can learn and contribute.
        </p>

        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ag9867603762@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-button"
>
  Get in Touch
</a>
      </section>
    </main>
  );
}