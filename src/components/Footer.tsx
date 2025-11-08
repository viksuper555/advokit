import logoIcon from "@/assets/logo-icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground text-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="ADVOKIT" className="h-8" />
            <div className="text-sm">
              <p className="font-semibold">ADVOKIT</p>
              <p className="opacity-75">
                Облачна legal-tech платформа, създадена от юристи за юристи
              </p>
            </div>
          </div>
          
          <div className="flex gap-8 text-sm">
            <Link 
              to="/contacts" 
              className="hover:text-primary-light transition-smooth"
            >
              Контакти
            </Link>
            <Link 
              to="/privacy" 
              className="hover:text-primary-light transition-smooth"
            >
              Политика за поверителност
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} ADVOKIT. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
