
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container-section">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-4">
            <p className="text-lg">
              I am a motivated and inquisitive aspiring Data Scientist, currently pursuing a degree in Computer Engineering from Kurdistan University. With a strong academic background in statistics, computer science, and data analysis, I am eager to apply my theoretical knowledge to practical, real-world problems.
            </p>
            <p>
              My coursework and personal projects have provided me with hands-on experience in Python and data visualization tools like Matplotlib.
            </p>
            <p>
              I am particularly passionate about machine learning and its applications in solving complex problems. I have a solid understanding of various machine learning algorithms and have implemented several models to tackle different challenges. My ability to quickly learn and adapt to new technologies, combined with my strong problem-solving skills, makes me a valuable addition to any data science team.
            </p>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div className="flex justify-center">
              <Avatar className="w-64 h-64 rounded-lg shadow-md overflow-hidden">
                <AvatarImage src="/lovable-uploads/0dbd82f9-a479-4bac-9ee5-172cff82fe8f.png" alt="Amin Kareshi" className="object-cover" />
                <AvatarFallback className="text-2xl">AK</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
