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
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Бъди сред <span className="text-primary">първите потребители</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Оставете имейл и ще ви пишем при старта и новини за развитието.
        </p>
        
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
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
            Абонирай се
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
