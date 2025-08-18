'use client';

import Image from 'next/image';
import { useState } from 'react';
import { GallerySlide } from '@/lib/constants';

interface CarouselProps {
  slides: GallerySlide[];
  title: string;
}

export const Carousel = ({ slides, title }: CarouselProps) => {
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
                        <div className="absolute bottom-0 left-0 right-0 bg-yellow-600 bg-opacity-50 text-white text-center py-3">
                            <h3 className="text-xl font-bold font-subtitulo">{title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};