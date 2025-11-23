import { Mail, Linkedin } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
        <h1 className="text-4xl font-bold mb-8">Контакти</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Свържете се с нас</h2>
            <p className="text-muted-foreground mb-6">
              Имате въпроси относно ADVOKIT или искате да научите повече за платформата? 
              Свържете се с нас чрез следните канали:
            </p>
          </div>

          <div className="grid gap-6">
            <a 
              href="mailto:advokitdpk@gmail.com"
              className="flex items-center gap-4 p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-smooth group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Имейл</h3>
                <p className="text-muted-foreground">advokitdpk@gmail.com</p>
              </div>
            </a>

            {/* <a 
              href="https://linkedin.com/company/advokit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-smooth group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <p className="text-muted-foreground">linkedin.com/in/advokit</p>
              </div>
            </a> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
