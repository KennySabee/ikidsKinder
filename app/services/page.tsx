'use client';

import { services } from '@/lib/constants';
import { AnimatedSection } from '@/components/AnimatedSection';
import Image from 'next/image';

// Definición de colores para las tarjetas
const cardColors = [
  'bg-blue-50 text-blue-800 border border-blue-200',
  'bg-red-50 text-red-800 border border-red-200',
  'bg-yellow-50 text-yellow-800 border border-yellow-200', 
  'bg-green-50 text-green-800 border border-green-200',
  'bg-purple-50 text-purple-800 border border-purple-200',
  'bg-sky-50 text-sky-800 border border-sky-200'
];

const Services = () => {
    return (
        <div className="bg-yellow-50 py-16 md:py-24">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-700 mb-4">Nuestros Servicios</h1>
                    <p className="text-lg md:text-xl text-center text-slate-600 max-w-3xl mx-auto mb-16">
                        Todo lo que necesitas para la tranquilidad de tu familia y el desarrollo feliz de tus hijos.
                    </p>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <AnimatedSection key={service.title} delay={`duration-[${500 + index * 100}ms]`}>
                            <div className={`${cardColors[index % cardColors.length]} p-8 rounded-2xl shadow-lg h-full transform hover:-translate-y-2 transition-all duration-300 flex flex-col hover:shadow-xl`}>
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="mb-4 flex-grow">{service.description}</p>
                                {service.features && (
                                    <ul className="space-y-2 mt-4">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="mr-2 text-yellow-600 font-bold">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection>
                    <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg border border-yellow-200">
                        <h2 className="text-3xl font-bold mb-4 text-yellow-700">Galería de Instalaciones</h2>
                        <p className="mb-8 text-slate-600">Un vistazo a nuestros espacios diseñados para la diversión y el aprendizaje.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="overflow-hidden rounded-xl shadow-lg aspect-square group">
                                    <Image
                                        src={`https://picsum.photos/400/400?random=${10+i}`}
                                        alt={`Instalaciones ${i+1}`}
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Services;