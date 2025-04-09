
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
      title: "Senior Software Developer",
      company: "Tech Company",
      period: "Jan 2022 - Present",
      description: "Led the development of a major product feature that increased user engagement by 35%. Mentored junior developers and implemented best practices for code quality.",
      technologies: ["React", "TypeScript", "Node.js", "AWS"],
    },
    {
      title: "Software Developer",
      company: "Digital Agency",
      period: "Mar 2019 - Dec 2021",
      description: "Developed and maintained multiple client websites and applications. Collaborated with designers to implement responsive UI components.",
      technologies: ["JavaScript", "React", "CSS", "Git"],
    },
    {
      title: "Junior Web Developer",
      company: "Startup Inc.",
      period: "Jun 2017 - Feb 2019",
      description: "Built and maintained the company's main website. Integrated third-party APIs and implemented analytics tracking.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
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
