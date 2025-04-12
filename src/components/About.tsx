
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Github, Globe, Mail, Phone } from "lucide-react";

const About = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-4 w-4" />,
      text: "aminkarashi8282@gmail.com",
    },
    {
      icon: <Phone className="h-4 w-4" />,
      text: "(+98)9051284424",
    },
    {
      icon: <Globe className="h-4 w-4" />,
      text: "Tehran, Iran",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/amin-karashi",
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/evilpatrik",
      icon: <Github className="h-4 w-4" />,
    },
  ];

  const languages = [
    { language: "English", skills: { reading: "80%", writing: "80%", speaking: "70%", listening: "80%" } },
    { language: "Persian", skills: { fluent: true } },
    { language: "Kurdish", skills: { fluent: true } },
  ];

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
            
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-2">Languages</h3>
              <ul className="space-y-2">
                {languages.map((lang, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="font-medium">{lang.language}:</span>
                    {lang.skills.fluent ? (
                      <span>Fluent</span>
                    ) : (
                      <span>
                        Reading {lang.skills.reading}, Writing {lang.skills.writing}, Speaking {lang.skills.speaking}, Listening {lang.skills.listening}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div className="flex justify-center">
              <Avatar className="w-64 h-64 rounded-lg shadow-md overflow-hidden">
                <AvatarImage src="/lovable-uploads/0dbd82f9-a479-4bac-9ee5-172cff82fe8f.png" alt="Amin Kareshi" className="object-cover" />
                <AvatarFallback className="text-2xl">AK</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="space-y-3 mt-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <span className="text-primary">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
              
              <div className="flex items-center gap-3 mt-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
