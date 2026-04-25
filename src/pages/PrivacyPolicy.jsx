import React from 'react';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';

const PrivacyPolicy = () => {
    return (
        <main className="bg-[#f7f7f5] text-[#111827]">
            <PageHero
                title="Privacy Policy."
                subtitle="Your Trust is Our Commitment"
                backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="py-24 px-6 md:px-16 max-w-4xl mx-auto">
                <Reveal>
                    <div className="prose prose-stone max-w-none">
                        <section className="mb-12">
                            <h2 className="text-3xl font-serif mb-6">Introduction</h2>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                At Shubham Builders & Developers, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website and services.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-serif mb-6">Information We Collect</h2>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                We may collect personal information such as your name, contact details, email address, and project requirements when you interact with us via our contact forms or during consultations.
                            </p>
                            <ul className="list-disc pl-6 text-stone-600 space-y-2">
                                <li>Identity Data: Name, title</li>
                                <li>Contact Data: Email address, phone numbers, project site address</li>
                                <li>Technical Data: IP address, browser type, and location data</li>
                                <li>Usage Data: Information about how you use our website</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-serif mb-6">How We Use Your Data</h2>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                Your information helps us provide tailored construction and design services. We use it to:
                            </p>
                            <ul className="list-disc pl-6 text-stone-600 space-y-2">
                                <li>Respond to inquiries and provide project quotes</li>
                                <li>Send updates regarding your projects</li>
                                <li>Improve our website performance and user experience</li>
                                <li>Comply with legal and regulatory obligations</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-serif mb-6">Data Security</h2>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                We implement robust security measures to prevent unauthorized access, disclosure, or modification of your personal data. Our team is trained in data handling best practices to ensure your information remains confidential.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-serif mb-6">Your Rights</h2>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                You have the right to access, correct, or request the deletion of your personal data. If you have any concerns about how your data is being handled, please contact our head office at Indore.
                            </p>
                        </section>

                        <section className="mb-12 text-stone-500 text-sm italic">
                            <p>Last Updated: April 2026</p>
                            <p>For further inquiries, contact us at info@Shubhambuilders.com</p>
                        </section>
                    </div>
                </Reveal>
            </section>
        </main>
    );
};

export default PrivacyPolicy;
