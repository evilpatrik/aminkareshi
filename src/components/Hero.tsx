
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start pt-20">
      <div className="container-section">
        <div className="space-y-4 animate-fade-in">
          <p className="text-lg text-muted-foreground font-light">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Amin Kareshi
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-muted-foreground">
            Data Scientist
          </h2>
          <p className="max-w-xl text-lg md:text-xl mt-6">
            I specialize in extracting insights from data and building machine learning models with a focus on Python and data science frameworks.
          </p>
        </div>
        <div className="mt-12">
          <button 
            onClick={() => scrollToSection("about")}
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down to learn more"
          >
            <span className="mr-2">Scroll down</span>
            <ArrowDown className="h-5 w-5 animate-bounce-slow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
