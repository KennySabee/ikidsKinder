"use client";

import { courses, playAreas, reviews } from "@/lib/constants";
import { StarIcon } from "@/components/icons";
import { AnimatedSection } from "@/components/AnimatedSection";

import Image from "next/image";
import Link from "next/link";

const Hero = () => (
  <div className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 text-amarillo-personalizado opacity-30 text-4xl animate-bounce">
        ⭐
      </div>
      <div
        className="absolute top-40 right-20 text-yellow-300 opacity-20 text-3xl animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        🌟
      </div>
      <div
        className="absolute bottom-32 left-1/4 text-amarillo-personalizado opacity-30 text-5xl animate-bounce"
        style={{ animationDelay: "2s" }}
      >
        ✨
      </div>
      <div
        className="absolute bottom-20 right-1/3 text-yellow-300 opacity-20 text-4xl animate-bounce"
        style={{ animationDelay: "0.5s" }}
      >
        💫
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Imagen a la izquierda */}
        <div className="w-full md:w-1/2 lg:w-2/5 relative">
          <div className="absolute -inset-4 bg-amarillo-personalizado rounded-2xl transform rotate-3 animate-pulse"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-yellow-300">
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
          <div
            className="absolute -bottom-6 -left-6 w-8 h-8 bg-yellow-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Contenido a la derecha */}
        <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left relative z-10">
          <AnimatedSection>
            <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold text-amarillo-personalizado mb-6 leading-tight pt-16 text-center">
              DONDE LA AVENTURA DE APRENDER COMIENZA
            </h1>
          </AnimatedSection>

          <AnimatedSection delay="duration-1000">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-8 border-l-4 border-yellow-400 transform hover:scale-[1.02] transition-transform duration-300">
              <p className="text-lg md:text-xl text-slate-700 text-justify">
                Somos una Institución de educación pre-primaria encaminada en
                aportar y cooperar de manera proactiva en la formación integral,
                brindando un entorno amigable y amoroso en el cuidado infantil
                en sus primeros años de vida académica desde los 3 meses a 5
                años de edad.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="duration-[1200ms]">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/admissions"
                className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap shadow-lg hover:shadow-xl"
              >
                Matrículas Abiertas
              </Link>
              <Link
                href="/about"
                className="bg-yellow-300 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 whitespace-nowrap shadow-lg hover:shadow-xl"
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
      <div
        className="absolute top-1/3 right-0 w-80 h-80 bg-yellow-300 rounded-full opacity-20 blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-0 left-1/4 w-60 h-60 bg-yellow-200 rounded-full opacity-20 blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  </div>
);
const Reviews = () => (
  <section className="py-20 bg-gradient-to-br from-sky-50 to-yellow-50 relative overflow-hidden">
    {/* Elementos decorativos */}
    <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-200 rounded-full opacity-20 blur-xl animate-bounce"></div>
    <div
      className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-15 blur-xl animate-bounce"
      style={{ animationDelay: "1s" }}
    ></div>

    <div className="container mx-auto px-6 relative z-10">
      <AnimatedSection>
        <h2 className="text-5xl md:text-7xl font-kidz text-center mb-12 text-amarillo-personalizado">
          LO QUE DICEN LOS PADRES{" "}
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.slice(0, 3).map((review, index) => (
          <AnimatedSection
            key={index}
            delay={`duration-[${700 + index * 200}ms]`}
          >
            <a
              href="https://www.google.com/maps/place/IKIDS+%22+El+Tel%C3%A9grafo%22/@-0.1728004,-78.4838518,17z/data=!4m8!3m7!1s0x91d59b241f8671fb:0x632048b48b9e3d93!8m2!3d-0.1728058!4d-78.4812769!9m1!1b1!16s%2Fg%2F11pw86y9yb?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-80 md:h-96"
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl md:hover:scale-105">
                <Image
                  src={`/testimonios/resena${index + 1}.png`}
                  alt={`Reseña de ${review.name}`}
                  fill
                  className="object-cover scale-125"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const Courses = () => (
  <section className="py-20 bg-gradient-to-br from-sky-50 to-yellow-50 relative overflow-hidden">
    {/* Elementos decorativos */}
    <div
      className="absolute top-20 left-1/4 w-40 h-40 bg-yellow-200 rounded-full opacity-20 blur-2xl animate-spin"
      style={{ animationDuration: "20s" }}
    ></div>
    <div
      className="absolute bottom-20 right-1/4 w-56 h-56 bg-yellow-300 rounded-full opacity-15 blur-2xl animate-spin"
      style={{ animationDuration: "25s", animationDirection: "reverse" }}
    ></div>

    {/* Estrellas de fondo */}
    <div
      className="absolute top-16 right-10 text-amarillo-personalizado opacity-20 text-4xl animate-bounce"
      style={{ animationDelay: "0.3s" }}
    >
      ⭐
    </div>
    <div
      className="absolute bottom-32 left-20 text-yellow-300 opacity-15 text-3xl animate-bounce"
      style={{ animationDelay: "1.5s" }}
    >
      🌟
    </div>
    <div
      className="absolute top-1/3 left-1/3 text-amarillo-personalizado opacity-20 text-2xl animate-bounce"
      style={{ animationDelay: "2s" }}
    >
      ✨
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <AnimatedSection>
        <h2 className="text-5xl md:text-7xl text-center mb-12 text-amarillo-personalizado">
          SALAS{" "}
        </h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
        {courses.map((area, index) => (
          <AnimatedSection
            key={index}
            delay={`duration-[${700 + index * 100}ms]`}
          >
            <div className="bg-amarillo-personalizado rounded-3xl shadow-xl overflow-hidden h-full group">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {area.name}
                </h3>
                <p className="text-slate-600">{area.description}</p>
              </div>
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
    <div
      className="absolute top-20 left-1/4 w-40 h-40 bg-yellow-200 rounded-full opacity-20 blur-2xl animate-spin"
      style={{ animationDuration: "20s" }}
    ></div>
    <div
      className="absolute bottom-20 right-1/4 w-56 h-56 bg-yellow-300 rounded-full opacity-15 blur-2xl animate-spin"
      style={{ animationDuration: "25s", animationDirection: "reverse" }}
    ></div>

    {/* Estrellas de fondo */}
    <div
      className="absolute top-16 right-10 text-amarillo-personalizado opacity-20 text-4xl animate-bounce"
      style={{ animationDelay: "0.3s" }}
    >
      ⭐
    </div>
    <div
      className="absolute bottom-32 left-20 text-yellow-300 opacity-15 text-3xl animate-bounce"
      style={{ animationDelay: "1.5s" }}
    >
      🌟
    </div>
    <div
      className="absolute top-1/3 left-1/3 text-amarillo-personalizado opacity-20 text-2xl animate-bounce"
      style={{ animationDelay: "2s" }}
    >
      ✨
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <AnimatedSection>
        <h2 className="text-5xl md:text-7xl text-center mb-12 text-amarillo-personalizado">
          RINCONES{" "}
        </h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
        {playAreas.map((area, index) => (
          <AnimatedSection
            key={index}
            delay={`duration-[${700 + index * 100}ms]`}
          >
            <div className="bg-amarillo-personalizado rounded-3xl shadow-xl overflow-hidden h-full group">
              <div className="relative overflow-hidden">
                <Image
                  src={area.imageUrl}
                  alt={area.name}
                  width={300}
                  height={200}
                  className={`w-full h-48 aspect-video object-cover object-center transform group-hover:scale-110 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {area.name}
                </h3>
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
          <h2 className="text-5xl md:text-6xl text-amarillo-personalizado mb-4">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para más
            información.
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
              className="bg-white text-amarillo-personalizado font-bold py-3 px-8 rounded-full border-2 border-yellow-500 hover:bg-yellow-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
