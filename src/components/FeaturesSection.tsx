import { Briefcase, CheckSquare, Gavel, Users, FolderOpen } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Вграден CRM",
    description: "История, съдебни дела и казуси за всеки клиент в ясен и унифициран вид.",
  },
  {
    icon: FolderOpen,
    title: "Хранилище за документи",
    description: "Всички документи на едно място – сигурно и лесно достъпно",
  },
  {
    icon: Gavel,
    title: "Следене на Съдебни дела",
    description: "Срокове и процесуални действия — винаги под контрол.",
  },
  {
    icon: Briefcase,
    title: "Управление на Казуси",
    description: "Всеки казус - ясен, структуриран и лесен за проследяване.",
  },
  {
    icon: CheckSquare,
    title: "Управление на Задачи",
    description: "Разпределяне, проследяване и контрол на екипната работа.",
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 text-foreground px-4">
          Основни <span className="text-primary">функционалности</span>
        </h2>
        
        {/* Mobile: Compact list */}
        <div className="sm:hidden space-y-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: Bowling pin layout - 2 items on first row, 3 on second row */}
        <div className="hidden sm:flex flex-col items-center gap-4 lg:gap-6">
          {/* First row: 2 items */}
          <div className="flex justify-center gap-4 lg:gap-6">
            {features.slice(0, 2).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-4 lg:p-6 rounded-2xl bg-card border-2 border-transparent hover:border-primary transition-smooth shadow-soft hover:shadow-medium w-full max-w-[280px] lg:max-w-[320px]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 lg:mb-4 shadow-medium group-hover:scale-110 transition-smooth">
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-base lg:text-lg font-bold mb-2 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Second row: 3 items */}
          <div className="flex justify-center gap-4 lg:gap-6">
            {features.slice(2, 5).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index + 2}
                  className="group relative p-4 lg:p-6 rounded-2xl bg-card border-2 border-transparent hover:border-primary transition-smooth shadow-soft hover:shadow-medium w-full max-w-[280px] lg:max-w-[320px]"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 lg:mb-4 shadow-medium group-hover:scale-110 transition-smooth">
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-base lg:text-lg font-bold mb-2 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
