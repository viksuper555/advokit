import { Cloud, Shield, Zap, Bot } from "lucide-react";

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
    icon: Bot,
    title: "ИИ асистент",
    description: "Готовност за интегриране на ИИ асистент за генериране на документи и анализ.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-foreground px-4">
          Ключови <span className="text-primary">предимства</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="text-center p-6 sm:p-8 rounded-2xl hover:bg-secondary transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex w-16 h-16 sm:w-20 sm:h-20 bg-primary-lighter rounded-full items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
                  {advantage.title}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
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
