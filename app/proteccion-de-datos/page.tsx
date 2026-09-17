"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import {
  ShieldCheckIcon,
  DocumentTextIcon,
  CameraIcon,
  PhotoIcon,
  IdentificationIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const documentos = [
  {
    title: "Política de protección de datos",
    description: "Lineamientos generales sobre el tratamiento de datos personales.",
    file: "/documentos/politica-proteccion-datos.pdf",
    icon: ShieldCheckIcon,
  },
  {
    title: "Aviso de privacidad",
    description: "Información sobre cómo recopilamos y protegemos tus datos.",
    file: "/documentos/aviso-privacidad.pdf",
    icon: DocumentTextIcon,
  },
  {
    title: "Videovigilancia",
    description: "Política sobre el uso de cámaras de seguridad en el centro.",
    file: "/documentos/videovigilancia.pdf",
    icon: CameraIcon,
  },
  {
    title: "Uso de imágenes",
    description: "Tratamiento de fotografías, videos y grabaciones de voz.",
    file: "/documentos/uso-imagenes.pdf",
    icon: PhotoIcon,
  },
  {
    title: "Formulario de derechos ARCO",
    description: "Solicita acceso, rectificación, eliminación u oposición.",
    file: "/documentos/formulario-arco.pdf",
    icon: IdentificationIcon,
  },
];

const ProteccionDeDatos = () => {
  return (
    <div className="bg-yellow-50 py-16 md:py-24 relative min-h-screen">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl text-yellow-200 opacity-50">🛡️</div>
        <div className="absolute top-40 right-20 text-3xl text-yellow-300 opacity-40">🔒</div>
        <div className="absolute bottom-40 left-20 text-5xl text-yellow-200 opacity-50">📄</div>
        <div className="absolute bottom-20 right-10 text-4xl text-yellow-300 opacity-40">✅</div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Breadcrumb */}
        <AnimatedSection>
          <nav className="text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-yellow-600 transition-colors">
              Inicio
            </Link>
            <span className="mx-2 text-slate-400">›</span>
            <span className="text-yellow-700 font-medium">Protección de Datos</span>
          </nav>
        </AnimatedSection>

        {/* Título y descripción */}
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-4">
            Centro de protección de datos
          </h1>
          <p className="text-lg text-slate-600 mb-12">
            Políticas y formularios sobre el tratamiento de datos personales conforme a la LOPDP.
          </p>
        </AnimatedSection>

        {/* Lista de documentos */}
        <div className="space-y-4">
          {documentos.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <AnimatedSection key={doc.title} delay={`duration-[${300 + index * 100}ms]`}>
                <Link
                  href={doc.file}
                  download
                  className="group flex items-center gap-4 bg-white p-5 md:p-6 rounded-2xl shadow-md border border-yellow-200 hover:shadow-xl hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                    <Icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-yellow-700 group-hover:text-yellow-800">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-slate-500">{doc.description}</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 group-hover:bg-yellow-600 flex items-center justify-center transition-colors">
                    <ArrowDownTrayIcon className="w-5 h-5 text-white" />
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        
      </div>
    </div>
  );
};

export default ProteccionDeDatos;