const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Web & Backend",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "AI & Data",
    skills: [
      "TensorFlow",
      "Keras",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section reveal"
    >
      <p className="section-label">03 — SKILLS</p>

      <h2>Tools I use to build.</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div
            className="skill-group interactive-card"
            key={group.title}
          >
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span
                  className="interactive-card"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}