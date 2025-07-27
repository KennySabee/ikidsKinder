'use client';

import { courses, playAreas, reviews } from '@/lib/constants';
import { StarIcon } from '@/components/icons';
import { AnimatedSection } from '@/components/AnimatedSection';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => (
    <div className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
            <div className="absolute top-20 left-10 text-yellow-200 opacity-30 text-4xl animate-bounce">⭐</div>
            <div className="absolute top-40 right-20 text-yellow-300 opacity-20 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>🌟</div>
            <div className="absolute bottom-32 left-1/4 text-yellow-200 opacity-30 text-5xl animate-bounce" style={{ animationDelay: '2s' }}>✨</div>
            <div className="absolute bottom-20 right-1/3 text-yellow-300 opacity-20 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>💫</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Imagen a la izquierda */}
                <div className="w-full md:w-1/2 lg:w-2/5 relative">
                    <div className="absolute -inset-4 bg-yellow-300 rounded-2xl transform rotate-3 animate-pulse"></div>
                    <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-yellow-400">
                        <Image
                            src="/base_Mesa de trabajo 1.png"
                            alt="Niños aprendiendo en iKids"
                            width={600}
                            height={600}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                    {/* Elementos flotantes */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
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
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-8 border-l-4 border-yellow-400 transform hover:scale-[1.02] transition-transform duration-300">
                            <p className="text-lg md:text-xl text-slate-700">
                                Somos una Institución de educación pre-primaria, que se encuentra encaminada en alcanzar la excelencia educativa, brindando un entorno amigable y amoroso en el cuidado infantil.
                            </p>
                        </div>
                    </AnimatedSection>
                    
                    <AnimatedSection delay="duration-[1200ms]">
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
                            <Link
                                href="/admissions"
                                className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap shadow-lg hover:shadow-xl"
                            >
                                Matrículas Abiertas
                            </Link>
                            <Link
                                href="/about"
                                className="bg-yellow-100 text-yellow-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-200 transition-all duration-300 transform hover:scale-105 whitespace-nowrap shadow-lg hover:shadow-xl"
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
            <div className="absolute top-0 -left-16 w-72 h-72 bg-yellow-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-yellow-300 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-yellow-200 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
    </div>
);

const Reviews = () => (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-yellow-50 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-200 rounded-full opacity-20 blur-xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-15 blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection>
                <h2 className="text-4xl font-bold text-center mb-12 text-yellow-600">Lo que dicen los papás</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <AnimatedSection key={index} delay={`duration-[${700 + index * 200}ms]`}>
                        <div className="bg-white p-6 rounded-3xl shadow-xl h-full flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300 border-2 border-yellow-100 hover:border-yellow-300">
                            <p className="text-slate-600 mb-4 text-lg italic">"{review.comment}"</p>
                            <div>
                                <div className="flex items-center text-yellow-400 mb-2">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <StarIcon key={i} className="w-5 h-5 fill-current" />
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
    <section className="py-20 bg-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-200 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Estrellas de fondo */}
        <div className="absolute top-20 left-10 text-yellow-200 opacity-20 text-3xl animate-bounce">⭐</div>
        <div className="absolute top-40 right-20 text-yellow-300 opacity-15 text-2xl animate-bounce" style={{ animationDelay: '0.8s' }}>🌟</div>
        <div className="absolute bottom-32 left-1/3 text-yellow-200 opacity-20 text-4xl animate-bounce" style={{ animationDelay: '1.2s' }}>✨</div>
        
        <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection>
                <h2 className="text-4xl font-bold text-center mb-12 text-yellow-600">Cursos Divertidos</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {courses.map((course, index) => (
                    <AnimatedSection key={index} delay={`duration-[${700 + index * 100}ms]`}>
                        <div className={`${course.color} p-8 rounded-3xl text-center shadow-xl h-full transform hover:scale-105 transition-all duration-300`}>
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
    <section className="py-20 bg-gradient-to-br from-sky-50 to-yellow-50 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-1/4 w-40 h-40 bg-yellow-200 rounded-full opacity-20 blur-2xl animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-yellow-300 rounded-full opacity-15 blur-2xl animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        
        {/* Estrellas de fondo */}
        <div className="absolute top-16 right-10 text-yellow-200 opacity-20 text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>⭐</div>
        <div className="absolute bottom-32 left-20 text-yellow-300 opacity-15 text-3xl animate-bounce" style={{ animationDelay: '1.5s' }}>🌟</div>
        <div className="absolute top-1/3 left-1/3 text-yellow-200 opacity-20 text-2xl animate-bounce" style={{ animationDelay: '2s' }}>✨</div>
        
        <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection>
                <h2 className="text-4xl font-bold text-center mb-12 text-yellow-600">Nuestros Rincones Mágicos</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {playAreas.map((area, index) => (
                    <AnimatedSection key={index} delay={`duration-[${700 + index * 100}ms]`}>
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full group">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={area.imageUrl}
                                    alt={area.name}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
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

const ContactCTA = () => (
    <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center border border-yellow-200">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-4">¿Tienes alguna pregunta?</h2>
                    <p className="text-slate-600 text-lg mb-8">
                        Estamos aquí para ayudarte. Ponte en contacto con nosotros para más información.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            href="/contact" 
                            className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Contáctanos
                        </Link>
                        <Link 
                            href="/admissions" 
                            className="bg-white text-yellow-600 font-bold py-3 px-8 rounded-full border-2 border-yellow-500 hover:bg-yellow-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Agenda una Visita
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    </section>
);

export default function Home() {
    return (
        <main className="pt-0">
            <Hero />
            <Reviews />
            <Courses />
            <PlayAreas />
            <ContactCTA />
        </main>
    );
}