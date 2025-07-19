import React from 'react';
import Link from 'next/link';
import { PhoneIcon, MailIcon, MapPinIcon } from './icons';

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/about' },
  { name: 'Servicios', path: '/services' },
  { name: 'Admisiones', path: '/admissions' },
  { name: 'Contacto', path: '/contact' },
];

const socialLinks = [
  { name: 'Facebook', icon: 'FB', url: '#' },
  { name: 'Instagram', icon: 'IG', url: '#' },
  { name: 'YouTube', icon: 'YT', url: '#' },
];

const contactInfo = [
  { icon: <PhoneIcon className="w-5 h-5 mr-3 text-blue-600" />, text: '(123) 456-7890' },
  { icon: <MailIcon className="w-5 h-5 mr-3 text-red-500" />, text: 'hola@ikids.com' },
  { icon: <MapPinIcon className="w-5 h-5 mr-3 text-green-600" />, text: 'Calle Falsa 123, Ciudad' },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-cyan-200 to-blue-300 text-slate-700">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="flex flex-col items-start">
                        <Link 
                            href="/" 
                            className="text-4xl font-heading tracking-wider mb-4 hover:opacity-90 transition-opacity"
                            aria-label="Volver al inicio"
                        >
                            <span className="text-blue-600">i</span>
                            <span className="text-yellow-500">K</span>
                            <span className="text-red-500">i</span>
                            <span className="text-green-600">d</span>
                            <span className="text-purple-500">s</span>
                        </Link>
                        <p className="text-sm">Creciendo juntos con amor y alegría.</p>
                    </div>

                    {/* Navigation Section */}
                    <div>
                        <h3 className="font-heading text-xl mb-4">Navegación</h3>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.path} 
                                        className="hover:text-white transition-colors hover:underline"
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
                        <h3 className="font-heading text-xl mb-4">Contacto</h3>
                        <ul className="space-y-3">
                            {contactInfo.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    {item.icon}
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div>
                        <h3 className="font-heading text-xl mb-4">Síguenos</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
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
            
            {/* Copyright Section */}
            <div className="bg-blue-600 py-4">
                <p className="text-center text-white text-sm">
                    &copy; {new Date().getFullYear()} iKids Guardería. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;