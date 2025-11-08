import { XCircle } from "lucide-react";

const problems = [
  "Край на разпръснатите документи и имейл нишките.",
  "Край на ръчното следене на срокове и процесуални действия.",
  "Край на разходите за локални сървъри и остарели системи.",
];

const WhySection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Защо <span className="text-primary">ADVOKIT</span>?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border-2 border-border hover:border-primary transition-smooth shadow-soft hover:shadow-medium"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium">
                <XCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-lg text-card-foreground leading-relaxed pt-4">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
