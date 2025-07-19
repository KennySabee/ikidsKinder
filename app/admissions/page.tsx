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
        <div className="bg-sky-50 py-16 md:py-24">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h1 className="text-5xl font-bold text-center text-red-500 mb-16">Proceso de Admisión</h1>
                </AnimatedSection>

                {/* ... (sección de pasos permanece igual) ... */}

                <AnimatedSection>
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
                        <h2 className="text-4xl font-bold text-center text-blue-600 mb-2">Agenda una Visita Guiada</h2>
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
                                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                                />
                            </div>
                            
                            {/* Resto de campos del formulario (igual que antes) */}
                            
                            <div className="md:col-span-2 text-center mt-4 space-y-4">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="bg-red-500 text-white font-bold py-3 px-12 rounded-full text-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Enviando...' : 'Agendar Visita'}
                                </button>
                                
                                {submitStatus === 'success' && (
                                    <p className="text-green-600 font-medium">
                                        ¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.
                                    </p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="text-red-600 font-medium">
                                        Ocurrió un error. Por favor intenta nuevamente.
                                    </p>
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