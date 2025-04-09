
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container-section">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-4">
            <p className="text-lg">
              Hello! I'm a passionate Data Scientist with expertise in Python, machine learning algorithms, and data analysis. 
              My journey in data science began during my academic years and I've been enthusiastic about extracting meaningful patterns from data ever since.
            </p>
            <p>
              I focus on applying statistical methods and machine learning techniques to solve complex problems. 
              I have experience working with cryptocurrency data and enjoy teaching data structures and algorithms.
            </p>
            <p>
              I believe in continuous learning and am always exploring new technologies and methodologies in the field of data science to expand my skillset.
            </p>
          </div>
          <div className="md:col-span-2 flex items-center justify-center">
            <Avatar className="w-64 h-64 rounded-lg shadow-md overflow-hidden">
              <AvatarImage src="/lovable-uploads/0dbd82f9-a479-4bac-9ee5-172cff82fe8f.png" alt="Amin Kareshi" className="object-cover" />
              <AvatarFallback className="text-2xl">AK</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
