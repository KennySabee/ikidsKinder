'use client'; // Necesario porque usamos componentes interactivos (AnimatedSection)

import { AnimatedSection } from '@/components/AnimatedSection';
import Image from 'next/image';

const About = () => {
    return (
        <div className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h1 className="text-5xl font-bold text-center text-purple-600 mb-12">Nuestra Familia iKids</h1>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="flex flex-col md:flex-row items-center bg-sky-100 rounded-3xl p-8 md:p-12 mb-16 shadow-lg">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 md:mb-0 md:mr-12">
                            <Image
                                src="https://picsum.photos/id/1027/400/400"
                                alt="Belén, Directora de iKids"
                                fill
                                className="rounded-full object-cover border-8 border-white shadow-xl"
                                sizes="(max-width: 768px) 192px, 256px"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl font-bold text-blue-600 mb-2">Belén García</h2>
                            <p className="text-xl font-semibold text-red-500 mb-4">Directora y Fundadora</p>
                            <p className="text-slate-700 leading-relaxed">
                                "Mi pasión siempre ha sido crear un espacio donde los niños no solo aprendan, sino que se sientan amados, seguros y felices. iKids es el sueño de ofrecer una segunda casa para nuestros pequeños, un lugar mágico que impulse su curiosidad y les dé las mejores herramientas para el futuro."
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 text-center">
                    <AnimatedSection delay="duration-700">
                        <div className="bg-yellow-100 p-8 rounded-2xl h-full shadow-md">
                            <h3 className="text-3xl font-bold text-yellow-700 mb-4">Misión</h3>
                            <p className="text-slate-600">
                                Brindar una educación inicial de alta calidad en un ambiente cálido y estimulante, promoviendo el desarrollo integral de cada niño a través del juego, el afecto y la exploración.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay="duration-1000">
                        <div className="bg-green-100 p-8 rounded-2xl h-full shadow-md">
                            <h3 className="text-3xl font-bold text-green-700 mb-4">Visión</h3>
                            <p className="text-slate-600">
                                Ser la guardería líder en innovación pedagógica, reconocida por formar niños felices, autónomos, creativos y con sólidos valores, preparados para enfrentar los retos del mañana.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay="duration-[1300ms]">
                        <div className="bg-red-100 p-8 rounded-2xl h-full shadow-md">
                            <h3 className="text-3xl font-bold text-red-700 mb-4">Filosofía</h3>
                            <p className="text-slate-600">
                                Creemos que cada niño es único. Nuestra filosofía se basa en el respeto a sus ritmos, el fomento de su curiosidad innata y la construcción de un aprendizaje significativo a través de experiencias positivas.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default About;