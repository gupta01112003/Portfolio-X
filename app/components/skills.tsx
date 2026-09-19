const skillGroups = [
  {
    number: "01",
    title: "Languages",
    description: "Core programming languages I use to build and solve problems.",
    skills: ["Java", "Python", "C++", "JavaScript", "SQL"],
  },
  {
    number: "02",
    title: "Web & Backend",
    description: "Technologies I use to develop applications and APIs.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Databases",
    description: "Tools for storing, managing, and working with application data.",
    skills: ["MySQL", "MongoDB"],
  },
  {
    number: "04",
    title: "AI & Data",
    description: "Libraries and frameworks for machine learning and data analysis.",
    skills: [
      "TensorFlow",
      "Keras",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
  {
    number: "05",
    title: "Tools",
    description: "Development and collaboration tools I work with.",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section reveal">
      <p className="section-label">03 — SKILLS</p>

      <div className="skills-heading">
        <h2>Tools I use to build.</h2>

        <p>
          A growing technical toolkit shaped by projects, experimentation,
          and hands-on development.
        </p>
      </div>

      <div className="skills-profile">
        <div className="skills-profile-number">
          05
        </div>

        <div className="skills-profile-content">
          <p className="skills-profile-label">
            TECHNICAL PROFILE
          </p>

          <h3>
            From idea
            <br />
            to working system.
          </h3>

          <p>
            I work across software development, backend systems,
            databases, AI, and data technologies. My approach is
            focused on understanding the problem first and then
            choosing the right technology to build a practical
            solution.
          </p>
        </div>

        <div className="skills-profile-symbol">
          {"</>"}
        </div>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <div className="skill-group-top">
              <span className="skill-number">
                {group.number}
              </span>

              <span className="skill-count">
                {group.skills.length} skills
              </span>
            </div>

            <h3>{group.title}</h3>

            <p className="skill-group-description">
              {group.description}
            </p>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}