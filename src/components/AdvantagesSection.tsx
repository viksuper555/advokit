import { Cloud, Shield, Zap } from "lucide-react";

const advantages = [
  {
    icon: Cloud,
    title: "Интеграции",
    description: "Интеграции с Търговския регистър и Единния портал за е-правосъдие.",
  },
  {
    icon: Zap,
    title: "Лесен достъп",
    description: "Изцяло уеб-базирано приложение. Достъп от всяко устройство, без инсталация.",
  },
  {
    icon: Shield,
    title: "Сигурност",
    description: "Сигурно облачно съхранение съвместимо с GDPR.",
  },
  {
    icon: Zap,
    title: "ИИ асистент",
    description: "Готовност за интегриране на ИИ асистент за генериране на документи и анализ.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Ключови <span className="text-primary">предимства</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl hover:bg-secondary transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex w-20 h-20 bg-primary-lighter rounded-full items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {advantage.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
