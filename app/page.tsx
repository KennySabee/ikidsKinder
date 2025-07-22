'use client';

import { courses, playAreas, reviews } from '@/lib/constants';
import { StarIcon } from '@/components/icons';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ContactForm } from '@/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => (
    <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Imagen a la izquierda */}
                <div className="w-full md:w-1/2 lg:w-2/5">
                    <Image
                        src="/base_Mesa de trabajo 1.png"
                        alt="Niños aprendiendo en iKids"
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>

                {/* Contenido a la derecha */}
                <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left relative z-10">
                    <AnimatedSection>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500 mb-6 leading-tight">
                            {"Donde la Aventura de Aprender Comienza".split(" ").map((word, index) => (
                                <span
                                    key={index}
                                    className="inline-block animate-fade-in-up hover:scale-105 transition-transform duration-300"
                                    style={{ 
                                        animationDelay: `${index * 0.1}s`,
                                        display: 'inline-block'
                                    }}
                                >
                                    {word}&nbsp;
                                </span>
                            ))}
                        </h1>
                    </AnimatedSection>
                    
                    <AnimatedSection delay="duration-1000">
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg mb-8">
                            <p className="text-lg md:text-xl text-slate-700">
                                Somos una Institución de educación pre-primaria, que se encuentra encaminada en alcanzar la excelencia educativa, brindando un entorno amigable y amoroso en el cuidado infantil.
                            </p>
                        </div>
                    </AnimatedSection>
                    
                    <AnimatedSection delay="duration-[1200ms]">
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
                            <Link
                                href="/admissions"
                                className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                            >
                                Matrículas Abiertas
                            </Link>
                            <Link
                                href="/about"
                                className="bg-blue-100 text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-200 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                            >
                                Conócenos
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
            <div className="absolute top-0 -left-16 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl animate-float"></div>
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-yellow-100 rounded-full opacity-20 blur-2xl animate-float-reverse"></div>
            <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-yellow-100 rounded-full opacity-20 blur-2xl animate-float"></div>
        </div>
    </div>
);

// ... (el resto del código permanece igual)


const Reviews = () => (
    <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-6">
            <AnimatedSection>
                <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">Lo que dicen los papás</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <AnimatedSection key={index} delay={`duration-[${700 + index * 200}ms]`}>
                        <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300">
                            <p className="text-slate-600 mb-4">"{review.comment}"</p>
                            <div>
                                <div className="flex items-center text-yellow-400 mb-2">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <StarIcon key={i} className="w-5 h-5" />
                                    ))}
                                </div>
                                <p className="font-bold text-slate-800">{review.name}</p>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
);

const Courses = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <AnimatedSection>
                <h2 className="text-4xl font-bold text-center mb-12 text-green-600">Cursos Divertidos</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {courses.map((course, index) => (
                    <AnimatedSection key={index} delay={`duration-[${700 + index * 100}ms]`}>
                        <div className={`${course.color} p-8 rounded-2xl text-center shadow-lg h-full transform hover:scale-105 transition-transform duration-300`}>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">{course.title}</h3>
                            <p className="text-slate-700">{course.description}</p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
);

const PlayAreas = () => (
    <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-6">
            <AnimatedSection>
                <h2 className="text-4xl font-bold text-center mb-12 text-red-500">Nuestros Rincones Mágicos</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {playAreas.map((area, index) => (
                    <AnimatedSection key={index} delay={`duration-[${700 + index * 100}ms]`}>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full group">
                            <Image
                                src={area.imageUrl}
                                alt={area.name}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{area.name}</h3>
                                <p className="text-slate-600">{area.description}</p>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
);

export default function Home() {
    return (
        // Se ha ajustado el padding-top a pt-16 (64px) para el header fijo.
        // Si la línea persiste, intenta valores como pt-14 (56px) o pt-12 (48px).
        <main className="pt-0">
            <Hero />
            <Reviews />
            <Courses />
            <PlayAreas />
            <div className="py-20 bg-white">
                <ContactForm />
            </div>
        </main>
    );
}