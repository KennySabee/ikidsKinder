'use client';

import Link from 'next/link';
import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/icons';
import { AnimatedSection } from '@/components/AnimatedSection';

const Contact = () => {
    return (
        <section className="py-16 md:py-24 bg-yellow-50">
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
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-700 mb-16">¡Ponte en Contacto!</h1>
                </AnimatedSection>

                <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                    {/* Contact Info */}
                    <AnimatedSection className="lg:w-1/3" delay="duration-700">
                        <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col justify-center space-y-8 border border-yellow-200">
                            <div>
                                <h3 className="text-2xl font-bold text-yellow-700 mb-4">Sede Telégrafo
</h3>
                                <div className="space-y-4">
                                    <p className="flex items-start">
                                        <MapPinIcon className="w-6 h-6 mr-3 text-yellow-600 flex-shrink-0 mt-1" />
                                        <a href="https://maps.app.goo.gl/bXD5PfMhbV22CVi57" target="_blank" className="text-slate-700 hover:text-yellow-600 transition-colors">Av. Telégrafo y Últimas Noticias</a>
                                        
                                    </p>
                                    <p className="flex items-center">
                                        <PhoneIcon className="w-6 h-6 mr-3 text-yellow-600 flex-shrink-0" />
                                        <a href="https://walink.co/6a6b60" target="_blank" className="text-slate-700 hover:text-yellow-600 transition-colors">(+593) 995745004</a>
                                    </p>
                                    <p className="flex items-center">
                                        <MailIcon className="w-6 h-6 mr-3 text-yellow-600 flex-shrink-0" />
                                        <a href="mailto:ikids.kindergarden@gmail.com" className="text-slate-700 hover:text-yellow-600 transition-colors">ikids.kindergarden@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-yellow-700 mb-4">Sede Jardin</h3>
                                <div className="space-y-4">
                                    <p className="flex items-start">
                                        <MapPinIcon className="w-6 h-6 mr-3 text-yellow-600 flex-shrink-0 mt-1" />
                                        <a href="https://maps.app.goo.gl/L8QGwbDY6jyBYQCB8" target="_blank" className="text-slate-700 hover:text-yellow-600 transition-colors">Av. Alemania y Mariana de Jesús</a>
                                    </p>
                                    <p className="flex items-center">
                                        <PhoneIcon className="w-6 h-6 mr-3 text-yellow-600 flex-shrink-0" />
                                        <a href="https://walink.co/6a6b60" target="_blank" className="text-slate-700 hover:text-yellow-600 transition-colors">(+593) 995745004</a>
                                    </p>
                                    <p className="flex items-center">
                                        <MailIcon className="w-6 h-6 mr-3 text-yellow-600 flex-shrink-0" />
                                        <a href="mailto:ikids.kindergarden@gmail.com" className="text-slate-700 hover:text-yellow-600 transition-colors">ikids.kindergarden@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* CTA Section */}
                    <AnimatedSection className="lg:w-2/3" delay="duration-1000">
                        <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col items-center justify-center text-center border border-yellow-200">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-yellow-700 mb-4">¿Listo para comenzar?</h2>
                                <p className="text-slate-700 text-lg mb-6">
                                    ¡Agenda una visita guiada y conoce nuestro espacio mágico donde los niños aprenden y crecen con alegría!
                                </p>
                            </div>
                            
                            <Link 
                                href="/admissions" 
                                className="bg-yellow-500 text-white font-bold py-4 px-10 rounded-full hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-8"
                            >
                                Agendar Visita Guiada
                            </Link>
                            
                            <div className="text-slate-600">
                                <p className="mb-2">¿Prefieres comunicarte de otra forma?</p>
                                <p>Llámanos al <a href="https://walink.co/6a6b60" target="_blank" className="text-yellow-600 font-medium hover:underline">(+593) 995745004</a></p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default Contact;