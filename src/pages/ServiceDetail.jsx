import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import Reveal from '../Components/Reveal';
import PageHero from '../Components/PageHero';
import CTASection from '../Components/home/CTASection';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f7f5]">
                <h2 className="text-2xl font-serif mb-4">Service Not Found</h2>
                <Link to="/services" className="text-[#B87333] hover:underline flex items-center gap-2">
                    <ArrowLeft size={16} /> Back to Services
                </Link>
            </div>
        );
    }

    const darkTeal = '#0e3a40';

    return (
        <main className="bg-[#f7f7f5] text-[#111827]">
            <PageHero 
                title={service.title}
                subtitle="Expertise & Excellence"
                backgroundImage={service.image}
            />

            <section className="py-24 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                    
                    {/* --- Content Column --- */}
                    <div className="lg:col-span-7">
                        <Reveal>
                            <Link to="/services" className="inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.2em] font-bold text-[#B87333] mb-12 hover:gap-4 transition-all transition-duration-300">
                                <ArrowLeft size={16} /> Back to All Services
                            </Link>
                            
                            <span className="block text-[14px] uppercase tracking-[0.4em] text-stone-400 font-bold mb-6">
                                The Craft
                            </span>
                            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8 text-[#0e3a40]">
                                {service.shortDesc}
                            </h2>
                            
                            <div className="h-[1px] w-24 bg-[#B87333] mb-12" />
                            
                            <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-light mb-12">
                                {service.fullDesc}
                            </p>
                        </Reveal>

                        {/* Features / Capabilities */}
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-16 pt-16 border-t border-stone-200">
                            {service.features.map((feature, idx) => (
                                <Reveal key={idx} delay={idx * 0.1}>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0">
                                            <CheckCircle2 size={24} className="text-[#B87333] opacity-60" strokeWidth={1.5} />
                                        </div>
                                        <p className="text-[15px] md:text-lg text-stone-700 font-medium leading-tight">
                                            {feature}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* --- Sidebar / Sticky Column --- */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-32 space-y-12">
                            {/* Complementary Image */}
                            <Reveal delay={0.3} side="right">
                                <div className="aspect-[4/5] overflow-hidden group relative">
                                    <div className="absolute inset-0 border-[0.5px] border-white/20 m-6 z-10 pointer-events-none" />
                                    <img 
                                        src={service.image} 
                                        alt={service.title} 
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-[#0e3a40]/10" />
                                </div>
                            </Reveal>

                            {/* CTA Box */}
                            <Reveal delay={0.4} side="right">
                                <div className="bg-[#0e3a40] p-10 md:p-12 text-white relative overflow-hidden">
                                     {/* Background Graphic */}
                                    <div className="absolute -bottom-10 -right-10 font-serif text-[10rem] text-white/[0.03] select-none pointer-events-none">
                                        SB
                                    </div>
                                    
                                    <h4 className="text-2xl font-serif mb-6 relative z-10">Start your legacy with us today.</h4>
                                    <p className="text-white/60 font-light mb-8 text-[14px] leading-relaxed relative z-10">
                                        Every great structure begins with a conversation. Let\'s discuss how our {service.title} service can bring your vision to absolute reality.
                                    </p>
                                    
                                    <Link 
                                        to="/contact" 
                                        className="group inline-flex items-center gap-3 bg-[#B87333] px-10 py-5 text-[14px] uppercase tracking-widest font-bold hover:bg-white hover:text-[#0e3a40] transition-all duration-500 relative z-10"
                                    >
                                        Enquire Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Other Services Navigator --- */}
            <section className="py-24 bg-white border-t border-stone-200">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16">
                    <div className="flex items-center justify-between mb-16">
                        <h3 className="font-serif text-3xl text-[#0e3a40]">Other Capabilities</h3>
                        <Link to="/services" className="text-[14px] uppercase tracking-widest font-bold text-[#B87333] border-b border-[#B87333]/30 pb-1 hover:border-[#B87333] transition-all">
                            View All
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {servicesData.filter(s => s.id !== id).slice(0, 3).map((other, idx) => (
                            <Link key={other.id} to={`/service/${other.id}`} className="group block">
                                <div className="aspect-video overflow-hidden mb-6">
                                    <img src={other.image} alt={other.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <h4 className="font-serif text-xl mb-2 group-hover:text-[#B87333] transition-colors">{other.title}</h4>
                                <p className="text-stone-500 text-[14px] font-light line-clamp-2">{other.shortDesc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
};

export default ServiceDetail;
