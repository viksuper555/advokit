const AboutSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 px-4">
        За кого е предназначен ADVOKIT?
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto opacity-95 text-center px-4">
            ADVOKIT е предназначен за адвокати, кантори и корпоративни юридически отдели, които искат по-организирана, бърза и сигурна работа.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
