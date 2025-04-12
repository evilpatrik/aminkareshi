
import { Github, Linkedin, Mail, Phone, Globe } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/amin-karashi",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/evilpatrik",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "Email",
      url: "mailto:aminkarashi8282@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
    {
      name: "Phone",
      url: "tel:+989051284424",
      icon: <Phone className="h-5 w-5" />,
    },
  ];

  return (
    <section id="contact">
      <div className="container-section text-center">
        <h2 className="section-title mx-auto mb-12 after:left-1/4">Get In Touch</h2>
        <p className="max-w-lg mx-auto mb-10 text-center">
          I'm currently looking for new opportunities in data science. Whether you have a question about my work or just want to say hi, feel free to reach out!
        </p>

        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
