import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-smooth"
        >
          ← Към начална страница
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Политика за поверителност</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <p className="text-muted-foreground">
            Последна актуализация: {new Date().toLocaleDateString('bg-BG')}
          </p>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">1. Въведение</h2>
            <p className="text-muted-foreground">
              ADVOKIT ("ние", "нас", "нашият") се ангажира да защитава поверителността на 
              своите потребители. Тази политика за поверителност обяснява как събираме, 
              използваме и защитаваме вашата лична информация в съответствие с Общия регламент 
              за защита на данните (GDPR).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">2. Събиране на данни</h2>
            <p className="text-muted-foreground">
              Ние събираме следните видове информация:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Лична информация (име, имейл адрес, телефонен номер)</li>
              <li>Професионална информация (адвокатска кантора, специализация)</li>
              <li>Данни за използване на платформата</li>
              <li>Информация за дела и документи, които създавате в системата</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">3. Използване на данните</h2>
            <p className="text-muted-foreground">
              Вашите данни се използват за:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Предоставяне и поддръжка на услугите на ADVOKIT</li>
              <li>Подобряване на функционалността на платформата</li>
              <li>Комуникация относно актуализации и нови функции</li>
              <li>Осигуряване на техническа поддръжка</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">4. Защита на данните</h2>
            <p className="text-muted-foreground">
              Ние използваме съвременни технологии за сигурност, включително криптиране 
              и сигурно облачно съхранение, за да защитим вашите данни. Всички данни се 
              съхраняват на сървъри в Европейския съюз в съответствие с изискванията на GDPR.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">5. Вашите права</h2>
            <p className="text-muted-foreground">
              Вие имате право на:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Достъп до вашите лични данни</li>
              <li>Коригиране на неточни данни</li>
              <li>Изтриване на вашите данни</li>
              <li>Ограничаване на обработката</li>
              <li>Преносимост на данните</li>
              <li>Възражение срещу обработката</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">6. Съхранение на данни</h2>
            <p className="text-muted-foreground">
              Вашите данни се съхраняват толкова дълго, колкото поддържате активен акаунт 
              в ADVOKIT или според законовите изисквания за съхранение на документи.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">7. Cookies</h2>
            <p className="text-muted-foreground">
              Използваме бисквитки (cookies) за подобряване на потребителското изживяване 
              и анализ на трафика. Можете да управлявате настройките за бисквитки чрез 
              вашия браузър.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">8. Контакти</h2>
            <p className="text-muted-foreground">
              За въпроси относно тази политика за поверителност или упражняване на вашите 
              права, моля свържете се с нас на:{" "}
              <a href="mailto:info@advokit.bg" className="text-primary hover:underline">
                info@advokit.bg
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">9. Промени в политиката</h2>
            <p className="text-muted-foreground">
              Запазваме правото да актуализираме тази политика за поверителност. 
              Промените влизат в сила веднага след публикуването им на тази страница.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
