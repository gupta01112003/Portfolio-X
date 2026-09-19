const projects = [
  {
    number: "01",
    title: "Breast Cancer Detection",
    description:
      "A deep learning system using CNNs for classifying tumors as benign or malignant.",
    technologies: "Python · TensorFlow · Keras · CNN",
  },
  {
    number: "02",
    title: "Expense Management System",
    description:
      "A web application for tracking, categorizing, and analyzing personal expenses.",
    technologies: "React · Node.js · Spring Boot · MySQL",
  },
  {
    number: "03",
    title: "E-Commerce Website",
    description:
      "A responsive marketplace with product search, filtering, and order tracking.",
    technologies: "React · Node.js · Python · MongoDB",
  },
];

export default function Projects() {
  return (
    <section
  id="work"
  className="projects-section reveal"
>
      <p className="section-label">02 — WORK</p>

      <h2>Projects I&apos;m proud of.</h2>

      <div className="project-card interactive-card">
        {projects.map((project) => (
          <article className="project-card interactive-card" key={project.number}>
            <span>{project.number}</span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p className="tech-stack">{project.technologies}</p>
          </article>
        ))}
      </div>
    </section>
  );
}