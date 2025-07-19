'use client'; // Necesario porque usamos hooks y manejadores de eventos

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, CloseIcon } from './icons';

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

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-4xl font-heading tracking-wider">
                        <span className="text-blue-500">i</span>
                        <span className="text-yellow-500">K</span>
                        <span className="text-red-500">i</span>
                        <span className="text-green-500">d</span>
                        <span className="text-purple-500">s</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`text-slate-600 hover:text-blue-600 transition-colors duration-300 text-lg font-semibold ${
                                    isActive(link.path) ? 'text-blue-600 font-bold' : ''
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsOpen(true)} 
                            className="text-slate-700"
                            aria-label="Abrir menú"
                        >
                            <MenuIcon className="w-8 h-8" />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
                    <div className="fixed top-0 left-0 w-full h-screen bg-sky-100 transform transition-transform duration-300 ease-in-out flex flex-col">
                        <div className="flex justify-between items-center p-6 border-b border-sky-200 flex-shrink-0">
                            <Link 
                                href="/" 
                                onClick={() => setIsOpen(false)} 
                                className="text-4xl font-heading tracking-wider"
                            >
                                <span className="text-blue-500">i</span>
                                <span className="text-yellow-500">K</span>
                                <span className="text-red-500">i</span>
                                <span className="text-green-500">d</span>
                                <span className="text-purple-500">s</span>
                            </Link>
                            <button 
                                onClick={() => setIsOpen(false)}
                                aria-label="Cerrar menú"
                            >
                                <CloseIcon className="w-8 h-8 text-slate-700" />
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-grow space-y-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-3xl font-heading ${
                                        isActive(link.path) 
                                            ? 'text-blue-600 font-bold' 
                                            : 'text-slate-700 hover:text-blue-600'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;