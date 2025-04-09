
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "Java"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Vercel"],
    },
  ];

  return (
    <section id="skills">
      <div className="container-section">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-secondary/30 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="mb-4 text-xl font-semibold">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
