import React from 'react';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';

const TermsConditions = () => {
    return (
        <main className="bg-[#f7f7f5] text-[#111827]">
            <PageHero
                title="Terms & Conditions."
                subtitle="Guidelines for our Partnership"
                backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="py-24 px-6 md:px-16 max-w-4xl mx-auto">
                <Reveal>
                    <div className="prose prose-stone max-w-none">
                        <section className="mb-12">
                            <h2 className="text-3xl font-serif mb-6">Service Overview</h2>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                By accessing our website and utilizing our services, you agree to comply with the terms and conditions outlined here. Shubham Builders & Developers provides civil construction, turnkey projects, and architectural services.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-serif mb-6">Project Agreements</h2>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                All construction projects are subject to individual contracts. While this website provides general information, the specific terms of any project (including timelines, costs, and deliverables) will be governed by the formal agreement signed between the client and Shubham Builders.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-serif mb-6">Intellectual Property</h2>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                All content on this website, including architectural designs, photographs, and text, is the property of Shubham Builders & Developers. Unauthorized use or reproduction of these materials is strictly prohibited.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-serif mb-6">Limitation of Liability</h2>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                While we strive for absolute precision, Shubham Builders & Developers is not liable for any indirect or consequential damages arising from the use of this website or reliance on any information provided herein.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-serif mb-6">Governing Law</h2>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                These terms are governed by the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh.
                            </p>
                        </section>

                        <section className="mb-12 text-stone-500 text-sm italic">
                            <p>Last Updated: April 2026</p>
                            <p>For legal inquiries, contact us at info@Shubhambuilders.com</p>
                        </section>
                    </div>
                </Reveal>
            </section>
        </main>
    );
};

export default TermsConditions;
