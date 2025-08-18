'use client';

import { services, gallerySlidesSedeTelegrafo, gallerySlidesSedeJardin } from '@/lib/constants';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Carousel } from '@/components/Carousel';

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
                    <h1 className="text-5xl md:text-7xl text-center text-yellow-700 mb-4 font-kidz-titulo">Nuestros Servicios</h1>
                    <p className="text-lg md:text-xl text-center text-slate-600 max-w-3xl mx-auto mb-16 font-parrafo-normal">
                        Todo lo que necesitas para la tranquilidad de tu familia y el desarrollo feliz de tus hijos.
                    </p>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <AnimatedSection key={service.title} delay={`duration-[${500 + index * 100}ms]`}>
                            <div className={`${cardColors[index % cardColors.length]} p-8 rounded-2xl shadow-lg h-full transform hover:-translate-y-2 transition-all duration-300 flex flex-col hover:shadow-xl`}>
                                <div className="text-4xl mb-4 text-yellow-500">{service.emoji}</div>
                                
                                <h3 className="text-2xl font-bold mb-3 font-subtitulo">{service.title}</h3>
                                <p className="font-delgado mb-4 flex-grow text-justify">{service.description}</p>
                                {service.features && (
                                    <ul className="space-y-2 mt-4">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className=" mr-2 text-yellow-600 font-bold">✓</span>
                                                <span className='font-delgado'>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection>
                    <div className="mt-20 bg-amarillo-personalizado rounded-2xl p-8 md:p-12 text-center shadow-lg">
                        <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-kidz-titulo">Galería de Instalaciones</h2>
                        <p className="text-lg md:text-xl mb-8 text-gray-800 font-parrafo-normal">Un vistazo a nuestros espacios diseñados para la diversión y el aprendizaje.</p>
                        
                        {/* Contenedores de imágenes */}
                        <div className="flex flex-col md:flex-row justify-between gap-8">
                            {/* Contenedor para Sede Telégrafo */}
                            <Carousel slides={gallerySlidesSedeTelegrafo} title="SEDE TELÉGRAFO" />

                            {/* Contenedor para Sede Jardín */}
                            <Carousel slides={gallerySlidesSedeJardin} title="SEDE JARDÍN" />
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Services;