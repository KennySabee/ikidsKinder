'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/icons';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

interface NavLink {
  name: string;
  path: string;
}

interface SocialLink {
  name: string;
  icon: React.ReactNode;
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
  { 
    name: 'Facebook', 
    icon: <FaFacebook className="w-5 h-5" />, 
    url: '#' 
  },
  { 
    name: 'Instagram', 
    icon: <FaInstagram className="w-5 h-5" />, 
    url: '#' 
  },
  { 
    name: 'YouTube', 
    icon: <FaYoutube className="w-5 h-5" />, 
    url: '#' 
  },
];

const contactInfo: ContactInfo[] = [
  { icon: <PhoneIcon className="w-5 h-5 mr-3 text-yellow-500" />, text: '(123) 456-7890' },
  { icon: <MailIcon className="w-5 h-5 mr-3 text-blue-400" />, text: 'hola@ikids.com' },
  { icon: <MapPinIcon className="w-5 h-5 mr-3 text-green-400" />, text: 'Calle Falsa 123, Ciudad' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-700 border-t border-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <Link
              href="/"
              className="mb-4 hover:opacity-90 transition-opacity duration-300"
              aria-label="Volver al inicio"
            >
              <Image
                src="/LOGO IKIDS.png"
                alt="iKids Kinder Garden"
                width={140}
                height={50}
                className="h-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 mt-2">Creciendo juntos con amor y alegría.</p>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="font-medium text-lg mb-4 text-yellow-500">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="hover:text-yellow-400 text-gray-600 transition-colors text-sm hover:underline duration-300"
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
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-200 hover:text-yellow-700 transition-all duration-300"
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
      <div className="bg-yellow-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white text-xs sm:text-sm">
            &copy; {currentYear} iKids Guardería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};