'use client';

import Link from 'next/link';
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
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <Link
              href="/"
              className="text-4xl font-heading tracking-wider mb-4 hover:opacity-90 transition-opacity"
              aria-label="Volver al inicio"
            >
              <span className="text-pink-400">i</span>
              <span className="text-yellow-400">K</span>
              <span className="text-blue-400">i</span>
              <span className="text-green-400">d</span>
              <span className="text-purple-400">s</span>
            </Link>
            <p className="text-sm text-gray-600">Creciendo juntos con amor y alegría.</p>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-pink-500">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="hover:text-pink-400 text-gray-600 transition-colors hover:underline"
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
            <h3 className="font-heading text-xl mb-4 text-blue-500">Contacto</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-green-500">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-pink-200 transition-all"
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
        <p className="text-center text-white text-sm">
          &copy; {currentYear} iKids Guardería. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
