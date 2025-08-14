'use client';

import { services } from '@/lib/constants';
import { AnimatedSection } from '@/components/AnimatedSection';
import Image from 'next/image';
import { useState } from 'react';

// Definición de colores para las tarjetas
const cardColors = [
  'bg-blue-50 text-blue-800 border border-blue-200',
  'bg-red-50 text-red-800 border border-red-200',
  'bg-yellow-50 text-yellow-800 border border-yellow-200', 
  'bg-green-50 text-green-800 border border-green-200',
  'bg-purple-50 text-purple-800 border border-purple-200',
  'bg-sky-50 text-sky-800 border border-sky-200'
];

// Definición del tipo para las slides
interface Slide {
  id: number;
  src: string;
  alt: string;
  label: string;
}

// Datos para la galería
const gallerySlidesSedeTelegrafo: Slide[] = [
  {
    id: 1,
    src: 'https://picsum.photos/800/600?random=10',
    alt: 'Instalaciones Sede Telégrafo 1',
    label: 'SEDE TELÉGRAFO'
  },
  {
    id: 2,
    src: 'https://picsum.photos/800/600?random=11',
    alt: 'Instalaciones Sede Telégrafo 2',
    label: 'SEDE TELÉGRAFO'
  }
];

const gallerySlidesSedeJardin: Slide[] = [
  {
    id: 1,
    src: 'https://picsum.photos/800/600?random=12',
    alt: 'Instalaciones Sede Jardín 1',
    label: 'SEDE JARDÍN'
  },
  {
    id: 2,
    src: 'https://picsum.photos/800/600?random=13',
    alt: 'Instalaciones Sede Jardín 2',
    label: 'SEDE JARDÍN'
  }
];

const Services = () => {
    return (
        <div className="bg-yellow-50 py-16 md:py-24">
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
                                <h3 className="text-2xl font-bold mb-3 font-subtitulo">{service.title}</h3>
                                <p className="font-delgado mb-4 flex-grow">{service.description}</p>
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

// Componente reutilizable para el carrusel
interface CarouselProps {
  slides: Slide[];
  title: string;
}

const Carousel = ({ slides, title }: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
    };

    return (
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden w-full">
            {/* Flecha izquierda */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 text-2xl text-gray-700 font-bold z-10"
            >
                ‹
            </button>

            {/* Flecha derecha */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 text-2xl text-gray-700 font-bold z-10"
            >
                ›
            </button>

            {/* Contenido del carrusel */}
            <div className="relative h-96 md:h-[500px]">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            className="w-full h-full object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-3">
                            <h3 className="text-xl font-bold font-subtitulo">{title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;