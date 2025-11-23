import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Благодарим! Ще ви пишем при старта и новини за развитието.");
      setEmail("");
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground px-4">
          Бъди сред <span className="text-primary">първите потребители</span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
          Запиши се, за да си сред първите получили информация за нашия старт и развитие.
        </p>
        
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto px-4"
        >
          <Input
            type="email"
            placeholder="Вашият имейл адрес"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 sm:h-14 text-base sm:text-lg border-2 focus:border-primary transition-smooth"
          />
          <Button 
            type="submit"
            size="lg"
            className="h-12 sm:h-14 px-6 sm:px-8 bg-gradient-primary hover:opacity-90 transition-smooth shadow-medium hover:shadow-soft"
          >
            Абонирай се
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
