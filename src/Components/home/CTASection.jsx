import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../Components/Reveal';

const CTASection = () => {
  const brandWine = '#B87333';
  const darkTeal = '#0e3a40';

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-[#0a2326]">

      {/* Visual Depth Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(129,19,49,0.15),transparent)]" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center flex flex-col items-center">

        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[1px] bg-white/30" />
            <span className="uppercase tracking-[0.5em] text-[10px] text-white/60 font-medium">Get in Touch</span>
            <div className="w-12 h-[1px] bg-white/30" />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="font-serif text-5xl md:text-8xl text-white leading-[1] mb-12 max-w-5xl">
            Let’s build with <br />
            <span className="">clarity & intent.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-stone-300/80 font-light text-lg md:text-xl max-w-2xl mb-16 leading-relaxed">
            Every great structure begins with a conversation. Tell us about your vision, site, and timeline.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden transition-all duration-500 ease-out"
            style={{ backgroundColor: brandWine }}
          >
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <span className="relative z-10 uppercase text-[11px] tracking-[0.4em] font-bold text-white flex items-center gap-4">
              Start a conversation
              <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:translate-x-2">
                <path d="M17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM0 4.5H17V3.5H0V4.5Z" fill="white" />
              </svg>
            </span>
          </Link>
        </Reveal>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-t from-white/20 to-transparent" />
    </section>
  );
};

export default CTASection;