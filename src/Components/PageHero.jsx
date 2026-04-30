import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';

const PageHero = ({ title, subtitle, backgroundImage, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`relative h-[350px] md:h-[550px] w-full bg-[#0c0a09] overflow-hidden ${className}`}>
      {/* --- Cinematic Background --- */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[8000ms] ease-out opacity-50 ${
            isLoaded ? 'scale-100' : 'scale-110 blur-sm'
          }`}
          style={{ backgroundImage: `url('${backgroundImage || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"}')` }}
        />
        
        {/* Sophisticated Layered Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0c0a09]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09] via-transparent to-transparent opacity-80" />
        
        {/* Subtle Animated Light Leak */}
        <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(184,115,51,0.05)_0%,transparent_50%)] animate-pulse pointer-events-none" />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col justify-center md:justify-end pb-8 md:pb-24">
        <div className="max-w-5xl">
          {/* Breadcrumb-style detail */}
          <div className={`overflow-hidden mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#B87333] font-bold">
                <span className="w-1 h-1 rounded-full bg-[#B87333]" />
                <span>Premier Construction</span>
                <span className="w-10 h-[1px] bg-[#B87333]/30" />
             </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.85] text-white mb-8 tracking-tighter">
            <Reveal delay={0.3} duration={1}>
              {title}
            </Reveal>
          </h1>

          {/* Subtitle with line */}
          <div className={`flex items-center gap-0 md:gap-6 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="hidden md:block h-[2px] w-20 bg-[#B87333]" />
            <span className="text-sm md:text-lg uppercase tracking-[0.3em] text-stone-300 font-medium">
              {subtitle}
            </span>
          </div>
        </div>
      </div>

      {/* --- Decorative Elements --- */}
      
      {/* Dynamic Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-pointer hidden md:flex">
         <span className="text-[10px] uppercase tracking-[0.4em] text-white font-light">Explore</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-[#B87333] to-transparent" />
      </div>

      {/* Modern Fine-line Frame */}
      <div className="absolute inset-0 border-[0.5px] border-white/10 pointer-events-none m-4 md:m-10 z-20" />
      
      {/* Corner Accents */}
      <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-[#B87333]/40 z-20 hidden md:block" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-[#B87333]/40 z-20 hidden md:block" />
    </section>
  );
};

export default PageHero;
