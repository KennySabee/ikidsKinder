'use client'; // Necesario para el formulario interactivo

import { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/icons';
import { AnimatedSection } from '@/components/AnimatedSection';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitStatus('success');
                form.reset();
            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h1 className="text-5xl font-bold text-center text-blue-600 mb-16">¡Ponte en Contacto!</h1>
                </AnimatedSection>

                <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                    {/* Contact Info - Se mantiene igual */}
                    <AnimatedSection className="lg:w-1/3" delay="duration-700">
                        <div className="bg-yellow-100 p-8 rounded-2xl shadow-lg h-full flex flex-col justify-center space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-yellow-800 mb-4">Sede Principal</h3>
                                <div className="space-y-4">
                                    <p className="flex items-start">
                                        <MapPinIcon className="w-6 h-6 mr-3 text-yellow-700 flex-shrink-0 mt-1" />
                                        <span>Calle de la Alegría 123, Ciudad Feliz</span>
                                    </p>
                                    <p className="flex items-center">
                                        <PhoneIcon className="w-6 h-6 mr-3 text-yellow-700 flex-shrink-0" />
                                        <a href="tel:+1234567890" className="hover:text-blue-600 transition-colors">(123) 456-7890</a>
                                    </p>
                                    <p className="flex items-center">
                                        <MailIcon className="w-6 h-6 mr-3 text-yellow-700 flex-shrink-0" />
                                        <a href="mailto:hola@ikids.com" className="hover:text-blue-600 transition-colors">hola@ikids.com</a>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-yellow-800 mb-4">Sede Campestre</h3>
                                <div className="space-y-4">
                                    <p className="flex items-start">
                                        <MapPinIcon className="w-6 h-6 mr-3 text-yellow-700 flex-shrink-0 mt-1" />
                                        <span>Avenida del Juego 45, Villa Sonrisa</span>
                                    </p>
                                    <p className="flex items-center">
                                        <PhoneIcon className="w-6 h-6 mr-3 text-yellow-700 flex-shrink-0" />
                                        <a href="tel:+1234567891" className="hover:text-blue-600 transition-colors">(123) 456-7891</a>
                                    </p>
                                    <p className="flex items-center">
                                        <MailIcon className="w-6 h-6 mr-3 text-yellow-700 flex-shrink-0" />
                                        <a href="mailto:campestre@ikids.com" className="hover:text-blue-600 transition-colors">campestre@ikids.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Form Section - Reemplaza el mapa por el formulario */}
                    <AnimatedSection className="lg:w-2/3" delay="duration-1000">
                        <form 
                            onSubmit={handleSubmit}
                            className="bg-sky-50 p-8 rounded-2xl shadow-lg h-full space-y-6"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                ></textarea>
                            </div>
                            <input type="hidden" name="_subject" value="Nuevo mensaje de contacto desde iKids" />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 w-full md:w-auto"
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                            </button>
                            {submitStatus === 'success' && (
                                <p className="text-green-600 mt-2 text-center">¡Gracias por tu mensaje! Te responderemos pronto.</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-600 mt-2 text-center">Error al enviar. Por favor, inténtalo de nuevo.</p>
                            )}
                        </form>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default Contact;