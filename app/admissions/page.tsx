'use client';

import { useState } from 'react';
import { admissionSteps } from '@/lib/constants';
import { AnimatedSection } from '@/components/AnimatedSection';

const Admissions = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            // Eliminé los espacios extra en la URL
            const response = await fetch('https://formspree.io/f/movlwqzo', {
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
        <div className="bg-yellow-50 py-16 md:py-24 relative">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 text-4xl text-yellow-200 opacity-50">
                    ⭐
                </div>
                <div className="absolute top-40 right-20 text-3xl text-yellow-300 opacity-40">
                    🌟
                </div>
                <div className="absolute bottom-40 left-20 text-5xl text-yellow-200 opacity-50">
                    ☀️
                </div>
                <div className="absolute bottom-20 right-10 text-4xl text-yellow-300 opacity-40">
                    🌻
                </div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                <AnimatedSection>
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-700 mb-16">Proceso de Admisión</h1>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {admissionSteps.map((step, index) => (
                        <AnimatedSection key={step.title} delay={`duration-[${300 + index * 100}ms]`}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
                                <div className="text-4xl font-bold text-yellow-500 mb-4">0{index + 1}</div>
                                <h3 className="text-xl font-bold text-yellow-700 mb-3">{step.title}</h3>
                                <p className="text-slate-600">{step.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection>
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-yellow-200">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-700 mb-2">Agenda una Visita Guiada</h2>
                        <p className="text-center text-slate-600 mb-8">¡Estamos emocionados de conocerte!</p>
                        
                        <form 
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            <div className="space-y-1">
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nombre del Padre/Madre</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name" 
                                    required 
                                    className="w-full p-3 rounded-lg border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-colors text-slate-800"
                                />
                            </div>
                            
                            <div className="space-y-1">
                                <label htmlFor="childName" className="block text-sm font-medium text-slate-700">Nombre del Niño(a)</label>
                                <input 
                                    type="text" 
                                    id="childName"
                                    name="childName" 
                                    required 
                                    className="w-full p-3 rounded-lg border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-colors text-slate-800"
                                />
                            </div>
                            
                            <div className="space-y-1">
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email" 
                                    required 
                                    className="w-full p-3 rounded-lg border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-colors text-slate-800"
                                />
                            </div>
                            
                            <div className="space-y-1">
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Teléfono</label>
                                <input 
                                    type="tel" 
                                    id="phone"
                                    name="phone" 
                                    required 
                                    className="w-full p-3 rounded-lg border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-colors text-slate-800"
                                />
                            </div>
                            
                            <div className="space-y-1 md:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Mensaje (opcional)</label>
                                <textarea 
                                    id="message"
                                    name="message" 
                                    rows={4}
                                    className="w-full p-3 rounded-lg border border-yellow-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-colors text-slate-800"
                                ></textarea>
                            </div>
                            
                            <div className="md:col-span-2 text-center mt-4 space-y-4">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="bg-yellow-500 text-white font-bold py-3 px-12 rounded-full text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Enviando...' : 'Agendar Visita'}
                                </button>
                                
                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-50 rounded-lg">
                                        <p className="text-green-600 font-medium">
                                            ¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.
                                        </p>
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="p-4 bg-red-50 rounded-lg">
                                        <p className="text-red-600 font-medium">
                                            Ocurrió un error. Por favor intenta nuevamente.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Admissions;