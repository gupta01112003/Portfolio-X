"use client";

import { useState } from "react";

const email = "ag9867603762@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="contact-section reveal">
      <p className="section-label">05 — CONTACT</p>

      <div className="contact-main">
        <p className="contact-label">
          HAVE A PROJECT IN MIND?
        </p>

        <h2>
          Let&apos;s build
          <br />
          something useful.
        </h2>

        <p className="contact-description">
          I&apos;m interested in software development, AI,
          web technologies, and real-world technology projects.
          If you&apos;d like to connect, feel free to reach out.
        </p>

        <div className="contact-actions">
          <a
            href={`mailto:${email}`}
            className="contact-button primary"
          >
            Get in touch
            <span>↗</span>
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="contact-button secondary"
          >
            {copied ? "Email copied" : "Copy email"}
            <span>{copied ? "✓" : "⧉"}</span>
          </button>
        </div>
      </div>

      <div className="contact-links">
        <a
          href="https://github.com/gupta01112003"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <span>↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ashish-gupta-70aa252a6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <span>↗</span>
        </a>

        <a
          href="\Aashish_Gupta_Resume_Updated.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}