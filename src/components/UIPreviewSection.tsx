import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import uiPreview from "@/assets/ui-preview.png";

const UIPreviewSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Вашият <span className="text-primary">цифров офис</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80">
            Всичко на едно място — организирано и достъпно
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-medium border-2 border-border cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setIsOpen(true)}>
            <div className="md:block hidden pointer-events-none">
              <img 
                src={uiPreview} 
                alt="ADVOKIT Interface Preview" 
                className="h-auto w-full pointer-events-none"
                draggable="false"
              />
            </div>
            <div className="md:hidden block pointer-events-none">
              <img 
                src={uiPreview} 
                alt="ADVOKIT Interface Preview" 
                className="h-auto w-full object-contain pointer-events-none"
                draggable="false"
              />
            </div>
          </div>
          
          {/* Decorative blur elements */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-lighter rounded-full blur-3xl opacity-20 pointer-events-none" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-lighter rounded-full blur-3xl opacity-20 pointer-events-none" />
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={[{ src: uiPreview, alt: "ADVOKIT Interface Preview" }]}
        plugins={[Zoom]}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        controller={{
          disableSwipeNavigation: true,
          closeOnPullDown: true,
          closeOnBackdropClick: true,
        }}
      />
    </section>
  );
};

export default UIPreviewSection;
