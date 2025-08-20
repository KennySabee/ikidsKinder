"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-yellow-50 py-16 md:py-24 relative overflow-hidden">
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

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl  text-center text-yellow-700 mb-12">
            FAMILIA IKIDS
          </h1>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 md:mb-0 md:mr-12 group flex-shrink-0">
              <div className="absolute inset-0  rounded-full animate-pulse opacity-50"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden  ">
                <Image
                  src="/rectora.png"
                  alt="Belén, Directora de iKids"
                  fill
                  className="object-cover scale-125 "
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-2">
                BELÉN CEVALLOS
              </h3>
              <p className="font-delgado text-lg md:text-xl font-semibold text-yellow-600 mb-6 bg-yellow-100 rounded-full px-6 py-2 inline-block">
                DIRECTORA 
              </p>
              <p className="text-justify text-base md:text-lg text-slate-700 leading-relaxed bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                " IKIDS, es una Institución de educación pre-primaria, que se
                encuentra encaminada en alcanzar la excelencia educativa,
                brindando un entorno amigable y amoroso en el cuidado infantil,
                basados en el respeto y compromiso de cada uno de los
                ejecutivos, personal docente y personal administrativo hacia
                nuestros alumnos. "
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatedSection delay="duration-700">
            <div className="bg-white p-8 rounded-2xl h-full shadow-lg border border-yellow-200 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-4 text-yellow-500">🎯</div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">
                Misión
              </h3>
              <p className="text-slate-700 text-justify">
                Ofrecer una educación inicial de excelencia que fomente valores, hábitos y conocimientos, con un enfoque en el desarrollo social y emocional de los niños, siempre en un entorno de amor, respeto y confianza que se sienta como familia.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="duration-1000">
            <div className="bg-white p-8 rounded-2xl h-full shadow-lg border border-yellow-200 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-4 text-yellow-500">✨</div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">
                 Visión
              </h3>
              <p className="text-slate-700 text-justify">
                Ser el preescolar líder, formando a los niños con modelos educativos innovadores, en espacios seguros y con un equipo humano calificado, que acompañe con calidad y calidez cada etapa de su primera infancia.

              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="duration-[1300ms]">
            <div className="bg-white p-8 rounded-2xl h-full shadow-lg border border-yellow-200 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-4 text-yellow-500">🌱 </div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">
                Filosofía
              </h3>
              <p className="text-slate-700 text-justify">
                En IKIDS creemos que la base del aprendizaje está en el amor, la seguridad y la disciplina positiva. Nuestro propósito es crecer junto a las familias, asegurando que cada niño se desarrolle de manera creativa, integral y feliz.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default About;
