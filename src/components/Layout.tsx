
import { ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-10 py-4 px-6 md:px-12 lg:px-24 shadow-sm">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <a href="#home" className="text-xl font-semibold">
            Portfolio
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-sm hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-sm hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-2 rounded-full bg-primary/90 hover:bg-primary shadow-md"
        size="icon"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 text-primary-foreground" />
      </Button>
    </div>
  );
};

export default Layout;
