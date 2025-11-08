import { Briefcase, CheckSquare, Gavel } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Казуси (Case Management)",
    description: "Всички клиенти, дела и документи — организирани.",
  },
  {
    icon: CheckSquare,
    title: "Задачи (Task Management)",
    description: "Разпределяне, проследяване и контрол на екипната работа.",
  },
  {
    icon: Gavel,
    title: "Съдебни дела (Litigation Tracking)",
    description: "Срокове и действия — винаги под контрол.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Какво <span className="text-primary">получавате</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-10 rounded-2xl bg-card border-2 border-transparent hover:border-primary transition-smooth shadow-soft hover:shadow-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-medium group-hover:scale-110 transition-smooth">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
