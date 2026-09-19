import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="work" className="projects-section reveal">
      <p className="section-label">02 — WORK</p>

      <div className="projects-heading">
        <h2>Things I&apos;ve built.</h2>

        <p>
          A selection of projects where I explore software, AI, web
          technologies, and real-world problem solving.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">
              0{index + 1}
            </div>

            <div className="project-main">
              <div className="project-top">
                <div>
                  <p className="project-category">
                    {project.category}
                  </p>

                  <h3>{project.title}</h3>
                </div>

                <span className="project-year">
                  {project.year}
                </span>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-arrow">
              ↗
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}