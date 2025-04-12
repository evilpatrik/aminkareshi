
import { Globe } from "lucide-react";

const Languages = () => {
  const languages = [
    { language: "English", skills: { reading: "Advanced", writing: "Advanced", speaking: "Intermediate", listening: "Advanced" } },
    { language: "Persian", skills: { fluent: true } },
    { language: "Kurdish", skills: { fluent: true } },
  ];

  return (
    <section id="languages" className="bg-background">
      <div className="container-section">
        <h2 className="section-title">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <div key={index} className="p-4 rounded-lg border bg-card shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-medium">{lang.language}</h3>
              </div>
              
              {lang.skills.fluent ? (
                <p className="text-muted-foreground">Native speaker</p>
              ) : (
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Reading:</span> 
                    <span className="font-medium">{lang.skills.reading}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Writing:</span> 
                    <span className="font-medium">{lang.skills.writing}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Speaking:</span> 
                    <span className="font-medium">{lang.skills.speaking}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Listening:</span> 
                    <span className="font-medium">{lang.skills.listening}</span>
                  </li>
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
