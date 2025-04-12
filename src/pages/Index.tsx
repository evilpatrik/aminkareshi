
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Languages from "@/components/Languages";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Languages />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        <p>© {new Date().getFullYear()} Amin Kareshi. All rights reserved.</p>
      </footer>
    </Layout>
  );
};

export default Index;
