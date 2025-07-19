'use client'; // Necesario para usar hooks en Next.js 13+

import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/icons';
import { AnimatedSection } from '@/components/AnimatedSection';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xyyzzz@formspree.io', { // Reemplaza con tu ID
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset(); // Limpia el formulario
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
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
          {/* Sección de Información de Contacto (mantén tu código actual) */}
          <AnimatedSection className="lg:w-1/3" delay="duration-700">
            <div className="bg-yellow-100 p-8 rounded-2xl shadow-lg h-full flex flex-col justify-center space-y-8">
              {/* ... Tus datos de contacto existentes ... */}
            </div>
          </AnimatedSection>

          {/* Formulario */}
          <AnimatedSection className="lg:w-2/3" delay="duration-1000">
            <form 
              onSubmit={handleSubmit}
              className="bg-sky-50 p-8 rounded-2xl shadow-lg space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name" // Nombre del campo en Formspree
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email" // Nombre del campo en Formspree
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone" // Nombre del campo en Formspree
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message" // Nombre del campo en Formspree
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-600 mt-2">¡Gracias por tu mensaje! Te responderemos pronto.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 mt-2">Error al enviar. Por favor, inténtalo de nuevo.</p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};