import { CheckCircle } from "lucide-react";

const problems = [
  "<b>Край</b> на <b>разпръснатата</b> документация.",
  "<b>Край</b> на <b>ръчното следене</b> на срокове и процесуални действия.",
  "<b>Край</b> на <b>разходите</b> за локални сървъри и остарели системи.",
];

const WhySection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-background">
      <div className="w-[90%] sm:max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-foreground px-4">
          Защо <span className="text-primary">ADVOKIT</span>?
        </h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl bg-card border-2 border-border hover:border-primary transition-smooth shadow-soft hover:shadow-medium"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <p className="text-base sm:text-lg text-card-foreground leading-relaxed pt-4">
              <span dangerouslySetInnerHTML={{ __html: problem }} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
