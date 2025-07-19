'use client'; // Necesario porque usamos componentes interactivos

import { courses, playAreas, reviews } from '@/lib/constants';
import { StarIcon } from '@/components/icons';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ContactForm } from '@/components/ContactForm';
import Image from 'next/image'; // Para optimizar imágenes
import Link from 'next/link';

const Hero = () => (
    <div className="relative bg-yellow-100 overflow-hidden isolate">
        <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
            <AnimatedSection>
                <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-4 title-word">
                    {"Donde la Aventura de Aprender Comienza".split(" ").map((word, index) => (
                        <span key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                            {word}&nbsp;
                        </span>
                    ))}
                </h1>
            </AnimatedSection>
            <AnimatedSection delay="duration-1000">
                <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-8">
                    En iKids, creemos en un aprendizaje lúdico y lleno de cariño para desarrollar el máximo potencial de cada niño.
                </p>
            </AnimatedSection>
            <AnimatedSection delay="duration-[1200ms]">
                <div className="flex justify-center items-center space-x-4">
                    <Link href="/admissions" className="bg-red-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Matrículas Abiertas
                    </Link>
                    <Link href="/about" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Conócenos
                    </Link>
                </div>
            </AnimatedSection>
        </div>
        
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute top-1/2 -right-4 w-72 h-72 bg-red-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl animate-float-reverse"></div>
            <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-yellow-200 rounded-full opacity-50 mix-blend-multiply filter blur-2xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-green-200 rounded-full opacity-40 mix-blend-multiply filter blur-xl animate-float-reverse"></div>
        </div>
    </div>
);

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
                                        <StarIcon key={i} className="w-5 h-5"/>
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
        <main>
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