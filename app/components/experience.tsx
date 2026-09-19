import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="experience-section reveal">
      <p className="section-label">04 — EXPERIENCE</p>

      <div className="experience-heading">
        <h2>Where I&apos;ve been.</h2>

        <p>
          Experiences that have helped me develop technical skills,
          practical thinking, and a better understanding of building
          real-world software.
        </p>
      </div>

      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-item" key={`${item.title}-${index}`}>
            <div className="experience-number">
              0{index + 1}
            </div>

            <div className="experience-period">
              {item.period}
            </div>

            <div className="experience-content">
              <p className="experience-type">
                {item.type}
              </p>

              <h3>{item.title}</h3>

              <p className="experience-organization">
                {item.organization}
              </p>

              <p className="experience-description">
                {item.description}
              </p>
            </div>

            <div className="experience-arrow">
              ↗
            </div>
          </article>
        ))}
      </div>

      <div className="education-block">
        <p className="section-label">EDUCATION</p>

        <div className="education-item">
          <div className="education-period">
            2022 — Present
          </div>

          <div className="education-content">
            <p className="experience-type">
              Bachelor of Engineering
            </p>

            <h3>
              Electronics &amp; Computer Science
            </h3>

            <p className="experience-organization">
              Thakur College of Engineering and Technology
            </p>

            <p className="experience-description">
              Building a foundation across computer science,
              software development, electronics, artificial
              intelligence, IoT, and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}