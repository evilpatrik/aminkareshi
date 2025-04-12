
import { Database, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Technologies",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["Python", "Java", "C", "Flask", "Git", "GitHub", "VS Code"],
    },
    {
      title: "Data Science & ML",
      icon: <Brain className="h-6 w-6 text-primary" />,
      skills: ["TensorFlow", "Scikit-Learn", "Data Structures", "Algorithms", "Probability", "Statistics"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      skills: ["Jupyter Notebook", "Pandas", "NumPy", "Matplotlib", "Data Visualization", "SQL"],
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
              className="p-6 rounded-lg border bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/30"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
                  >
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
