import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import logoFull from "@/assets/logo-full.png";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Благодарим! Ще се свържем с вас скоро.");
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-lighter rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-lighter rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <img 
          src={logoFull} 
          alt="ADVOKIT" 
          className="h-16 mx-auto mb-8 animate-fade-in"
        />
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in-up">
          Облачна платформа за управление на{" "}
          <span className="text-primary">правната работа</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Централизирайте дела, задачи и срокове в едно сигурно място.
        </p>
        
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <Input
            type="email"
            placeholder="Вашият имейл адрес"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-14 text-lg border-2 focus:border-primary transition-smooth"
          />
          <Button 
            type="submit"
            size="lg"
            className="h-14 px-8 bg-gradient-primary hover:opacity-90 transition-smooth shadow-medium hover:shadow-soft"
          >
            Стани сред първите
          </Button>
        </form>
        
        <p className="text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          С абонирането приемам{" "}
          <a href="#privacy" className="text-primary hover:underline">
            Политиката за поверителност
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
