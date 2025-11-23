import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import logoFull from "@/assets/logo-full.svg";

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
          className="h-16 mx-auto mb-12 animate-fade-in object-cover object-center aspect-[6/1]"
        />
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in-up px-4">
          Облачна платформа за управление на Вашите{" "}
          <span className="text-primary">юридически процеси</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-medium max-w-3xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
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
            Научете първи за нас
          </Button>
        </form>
        
        <p className="text-sm text-foreground/70 animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
          С абонирането приемам{" "}
          <Link to="/privacy" className="text-primary font-semibold hover:text-primary-light underline decoration-2 underline-offset-2 transition-smooth">
            Политиката за поверителност
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Hero;
