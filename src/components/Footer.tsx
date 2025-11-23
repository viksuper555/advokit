import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 bg-[#240a47] text-[#f0e6f6] border-t border-[#240a47]/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2">
          <h2 className="text-xl sm:text-2xl font-bold">ADVOKIT</h2>
          <p className="text-sm opacity-90">— облачна legal-tech платформа, създадена от юристи за юристи.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm mb-6 sm:mb-8">
          <Link 
            to="/contacts" 
            className="text-[#8a326e] decoration-[#8a326e]/50 hover:text-[#8a326e]/80 hover:decoration-[#8a326e]/80 transition-smooth"
          >
            Контакти
          </Link>
          <span className="hidden sm:inline opacity-50">|</span>
          <Link 
            to="/privacy" 
            className="text-[#8a326e] decoration-[#8a326e]/50 hover:text-[#8a326e]/80 hover:decoration-[#8a326e]/80 transition-smooth"
          >
            Политика за поверителност
          </Link>
        </div>
        
        <div className="text-sm opacity-75 px-4">
          <p>© {new Date().getFullYear()} ADVOKIT. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
