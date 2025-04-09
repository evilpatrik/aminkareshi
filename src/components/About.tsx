
const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container-section">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-4">
            <p className="text-lg">
              Hello! I'm a passionate software developer with a keen interest in creating 
              intuitive and impactful digital experiences. My journey in tech began
              when I built my first website, and I've been hooked ever since.
            </p>
            <p>
              I focus on writing clean, efficient code and enjoy solving complex 
              problems. When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying the outdoors.
            </p>
            <p>
              I believe in continuous learning and am always looking to expand my
              skillset and tackle new challenges.
            </p>
          </div>
          <div className="md:col-span-2 flex items-center justify-center">
            <div className="w-64 h-64 bg-muted rounded-lg shadow-md">
              {/* You can add your image here */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Profile Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
