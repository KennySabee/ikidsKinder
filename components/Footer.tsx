'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/icons';

interface NavLink {
  name: string;
  path: string;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  text: string;
}

const navLinks: NavLink[] = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/about' },
  { name: 'Servicios', path: '/services' },
  { name: 'Admisiones', path: '/admissions' },
  { name: 'Contacto', path: '/contact' },
];

const socialLinks: SocialLink[] = [
  { name: 'Facebook', icon: 'FB', url: '#' },
  { name: 'Instagram', icon: 'IG', url: '#' },
  { name: 'YouTube', icon: 'YT', url: '#' },
];

const contactInfo: ContactInfo[] = [
  { icon: <PhoneIcon className="w-5 h-5 mr-3 text-pink-400" />, text: '(123) 456-7890' },
  { icon: <MailIcon className="w-5 h-5 mr-3 text-blue-400" />, text: 'hola@ikids.com' },
  { icon: <MapPinIcon className="w-5 h-5 mr-3 text-green-400" />, text: 'Calle Falsa 123, Ciudad' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-700 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <Link
              href="/"
              className="mb-4 hover:opacity-90 transition-opacity"
              aria-label="Volver al inicio"
            >
              <Image
                src="/LOGO IKIDS.png"
                alt="iKids Kinder Garden"
                width={140} // Tamaño ajustado para footer
                height={50}
                className="h-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 mt-2">Creciendo juntos con amor y alegría.</p>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="font-medium text-lg mb-4 text-pink-500">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="hover:text-pink-400 text-gray-600 transition-colors text-sm hover:underline"
                    aria-label={`Ir a ${link.name}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-medium text-lg mb-4 text-blue-500">Contacto</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 text-sm">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="font-medium text-lg mb-4 text-green-500">Síguenos</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-9 h-9 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-pink-200 transition-all"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-pink-400 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white text-xs sm:text-sm">
            &copy; {currentYear} iKids Guardería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};