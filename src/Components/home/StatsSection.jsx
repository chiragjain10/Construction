import React, { useState, useEffect, useRef } from 'react';
import Reveal from '../../Components/Reveal';

const StatsSection = () => {
  const brandWine = '#B87333';
  const darkTeal = '#0e3a40';

  const items = [
    { value: '30', suffix: '+', label: 'Years of Experience', detail: 'Crafting legacies since 1995' },
    { value: '500', suffix: '+', label: 'Projects Delivered', detail: 'Across residential & commercial' },
    { value: 'Central', suffix: '', label: 'India Presence', detail: 'Focusing on all over Madhya Pradesh' },
  ];

  return (
    <section className="py-4 md:py-10 bg-[#0e3a40] text-white relative overflow-hidden">
      {/* Premium Radial Glow & Vignette to add depth to flat color */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,58,64,0.6)_0%,#072024_100%)] pointer-events-none" />
      
      {/* Subtle Grainy Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Subtle top horizontal border */}
        <div className="w-full h-[1px] bg-white/10 mb-16 md:mb-24" />

        <div className="grid grid-cols-1 md:grid-cols-3 relative">
          
          {items.map((it, i) => (
            <div key={it.label} className="relative group px-4 md:px-8 lg:px-12 first:pl-0 last:pr-0 mb-16 md:mb-0">
              
              {/* Premium Vertical Dividers for Desktop */}
              {i !== 0 && (
                <div className="hidden md:block absolute left-0 top-4 bottom-4 w-[1px] bg-white/10 group-hover:bg-white/20 transition-colors duration-500" />
              )}
              
              <Reveal delay={i * 0.15}>
                <div className="flex flex-col">
                  
                  {/* Background "Ghost" Number - Moves on hover */}
                  <div className="absolute -top-12 left-0 md:left-4 lg:left-8 font-serif text-[10rem] text-white/[0.02] select-none pointer-events-none transition-all duration-1000 group-hover:text-white/[0.05] group-hover:-translate-y-2">
                    0{i + 1}
                  </div>

                  {/* Value and Suffix */}
                  <div className="flex items-baseline mb-4">
                    <div className="font-serif text-6xl md:text-7xl lg:text-[6.5rem] leading-none tracking-tight tabular-nums font-light">
                      <CountUp end={it.value} />
                      <span className="text-[#B87333] font-light">{it.suffix}</span>
                    </div>
                  </div>

                  {/* Copper Line with hover stretch */}
                  <div className="relative w-12 h-[1px] bg-[#B87333]/40 mb-6 overflow-hidden">
                    <div className="absolute inset-0 bg-[#B87333] w-full origin-left group-hover:scale-x-150 transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.3,1)]" />
                  </div>

                  {/* Text Labels */}
                  <div className="uppercase tracking-[0.4em] text-[10px] lg:text-[11px] font-bold text-stone-300 mb-3 group-hover:text-white transition-colors duration-500">
                    {it.label}
                  </div>
                  
                  <div className="text-stone-400 font-light text-sm italic tracking-wide group-hover:text-stone-300 transition-colors duration-500">
                    {it.detail}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
          
        </div>
        
        {/* Subtle bottom horizontal border */}
        <div className="w-full h-[1px] bg-white/10 mt-16 md:mt-24" />
      </div>
    </section>
  );
};

/* Ultra-smooth native requestAnimationFrame CountUp component */
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Runs only once when scrolling into view
        }
      },
      { threshold: 0.2 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const endValue = parseInt(end, 10);
    // If value is non-numeric like 'Central', just spit it out immediately!
    if (isNaN(endValue)) {
      setCount(end);
      return;
    }

    let startTime = null;

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={elementRef}>{count}</span>;
};

export default StatsSection;