
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Data Scientist",
      company: "CopalCapital",
      period: "2022 - Present",
      description: "Working with data science tools to analyze cryptocurrency data, extract patterns, and develop predictive models for market trends and investment opportunities.",
      technologies: ["Python", "TensorFlow", "Scikit-Learn", "Data Analysis", "Cryptocurrency"],
    },
    {
      title: "Teaching Assistant",
      company: "Kurdistan University",
      period: "2021 - 2022",
      description: "Assisted professors in teaching Data Structures and Algorithms course. Conducted lab sessions, graded assignments, and helped students understand complex algorithmic concepts.",
      technologies: ["Data Structures", "Algorithms", "Teaching", "Problem-Solving"],
    },
  ];

  return (
    <section id="experience" className="bg-secondary/50">
      <div className="container-section">
        <h2 className="section-title">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                  <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
                </div>
                <div className="text-lg text-primary font-medium">{exp.company}</div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
