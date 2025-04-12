
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <section id="education">
      <div className="container-section">
        <h2 className="section-title">Education</h2>
        <Card className="border-l-4 border-l-primary transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-start gap-4">
              <GraduationCap className="h-6 w-6 text-primary mt-1" />
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <CardTitle className="text-xl font-bold">Bachelor of Computer Engineering</CardTitle>
                  <span className="text-sm text-muted-foreground font-medium">Current</span>
                </div>
                <div className="text-lg text-primary font-medium">Kurdistan University</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <p>Pursuing a degree in Computer Engineering with focus on data science and machine learning.</p>
              <Badge className="mt-2 md:mt-0" variant="outline">GPA: 17.2/20</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
