'use client';

import { useState } from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState(null);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        setFormStatus('success');
        setTimeout(() => {
            setFormStatus(null);
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: '',
            });
        }, 3000);
    };

    return (
        <section
            id="contact"
            className="py-20 text-gfc-dark-gray relative overflow-hidden"
            style={{ backgroundColor: '#e6c767' }}
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gfc-gold rounded-bl-full transform translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gfc-gold rounded-tr-full transform -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
                    <div className="h-1 w-24 bg-gfc-gold mx-auto"></div>
                    <p className="text-gfc-dark-gray mt-6 max-w-4xl mx-auto text-xlg md:text-xl">
                        Ready to transform your property? Contact us today for a free consultation
                        and quote.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <ContactInfo />
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <ContactForm
                            formData={formData}
                            formStatus={formStatus}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
