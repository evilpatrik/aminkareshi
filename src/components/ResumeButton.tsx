
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeButton = () => {
  // Link to your actual resume file in the public directory
  const resumeUrl = "/amin-kareshi-resume.pdf";

  const handleDownload = () => {
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Amin_Kareshi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload} className="btn-primary group">
      <FileText className="mr-2 h-4 w-4 group-hover:animate-bounce" />
      Download CV
    </Button>
  );
};

export default ResumeButton;
