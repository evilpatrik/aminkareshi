
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeButton = () => {
  // In a real implementation, you would link this to your actual resume file
  const resumeUrl = "/path-to-your-resume.pdf";

  return (
    <Button className="btn-primary group">
      <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
      Download Resume
    </Button>
  );
};

export default ResumeButton;
