import { projects } from "../data/projects";

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="projects-section reveal">
      <p className="section-label">02 — WORK</p>

      <div className="projects-heading">
        <h2>Things I&apos;ve built.</h2>

        <p>
          A selection of projects where I explore software, AI technologies,
          and real-world problem solving.
        </p>
      </div>

      {/* FEATURED PROJECT */}

      {featuredProject && (
        <article className="featured-project">
          <div className="featured-project-top">
            <div>
              <p className="project-category">
                Featured Project
              </p>

              <p className="featured-project-category">
                {featuredProject.category}
              </p>

              <h3>{featuredProject.title}</h3>
            </div>

            <span className="featured-project-year">
              {featuredProject.year}
            </span>
          </div>

          <div className="featured-project-content">
            <div className="featured-project-description">
              <p>{featuredProject.description}</p>

              <div className="project-tech">
                {featuredProject.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  GitHub
                  <span>↗</span>
                </a>

                <a
                  href={featuredProject.demo}
                  className="project-button secondary"
                >
                  Live Demo
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="featured-project-visual">
              <div className="visual-grid">
                <div className="visual-orb"></div>

                <div className="visual-data data-one">
                  CO₂
                </div>

                <div className="visual-data data-two">
                  REAL-TIME
                </div>

                <div className="visual-data data-three">
                  IoT
                </div>

                <div className="visual-line"></div>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* OTHER PROJECTS */}

      <div className="projects-list">
        {otherProjects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">
              0{index + 2}
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