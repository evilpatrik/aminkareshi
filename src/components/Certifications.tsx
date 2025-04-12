
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

const Certifications = () => {
  const certifications: CertificationItem[] = [
    {
      title: "Calculus for Machine Learning and Data Science",
      issuer: "Coursera - DeepLearning.AI",
      date: "2023",
      link: "https://coursera.org/share/0eb4398a2ae0be79a014cccf78cdb366",
    },
    {
      title: "Linear Algebra for Machine Learning and Data Science",
      issuer: "Coursera - DeepLearning.AI",
      date: "2023",
      link: "https://coursera.org/share/4ba5d65a3df9d87e99e10296a3030624",
    },
    {
      title: "Probability and Statistics for Machine Learning and Data Science",
      issuer: "Coursera - DeepLearning.AI",
      date: "2023",
      link: "https://coursera.org/share/e56f65ea8843f6c34d43c0ec1766f7c2",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera - DeepLearning.AI",
      date: "2023",
      link: "https://coursera.org/share/780531679febccc4e1da5faaf13476de",
    },
  ];

  return (
    <section id="certifications">
      <div className="container-section">
        <h2 className="section-title">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="transition-all hover:shadow-md hover:border-primary/30">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Award className="h-6 w-6 text-primary" />
                <div className="flex-1">
                  <CardTitle className="text-lg font-bold">
                    {cert.title}
                  </CardTitle>
                </div>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1 rounded-full hover:bg-secondary transition-colors"
                    title="View Certificate"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
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
