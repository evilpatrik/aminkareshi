
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

const Certifications = () => {
  const certifications: CertificationItem[] = [
    {
      title: "Machine Learning Specialization",
      issuer: "Example University",
      date: "2023",
      link: "#", // Replace with actual link
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "Example Platform",
      date: "2022",
      link: "#", // Replace with actual link
    },
    {
      title: "Python for Data Science",
      issuer: "Example Academy",
      date: "2021",
      link: "#", // Replace with actual link
    },
  ];

  return (
    <section id="certifications">
      <div className="container-section">
        <h2 className="section-title">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Award className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-lg font-bold">
                    {cert.link ? (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-primary transition-colors"
                      >
                        {cert.title}
                      </a>
                    ) : (
                      cert.title
                    )}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{cert.issuer}</span>
                  <Badge variant="outline">{cert.date}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
