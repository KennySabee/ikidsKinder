'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuIcon, CloseIcon } from './icons'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/about' },
  { name: 'Servicios', path: '/services' },
  { name: 'Admisiones', path: '/admissions' },
  { name: 'Contacto', path: '/contact' },
]

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const isActive = (path: string) => pathname === path

  return (
    <>
      <motion.header
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-amarillo-personalizado'
        } backdrop-blur-sm`}
      >
        {/* Contenedor con ancho máximo */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/LOGO IKIDS.png"
                  alt="iKids Kinder Garden"
                  width={150}
                  height={60}
                  className="h-auto object-contain w-auto max-w-[150px]"
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className={`px-4 py-2 rounded-full text-base font-bold transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-yellow-300 text-black shadow-sm'
                        : 'text-black hover:bg-yellow-200 hover:text-black'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(true)} 
                className="text-black bg-yellow-300 p-2 rounded-full shadow-sm hover:bg-yellow-400 transition-colors"
                aria-label="Abrir menú"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-30 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-yellow-50 flex flex-col"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex justify-between items-center p-4 bg-white">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center"
                >
                  <Image
                    src="/LOGO IKIDS.png"
                    alt="iKids Kinder Garden"
                    width={120}
                    height={40}
                    className="h-auto object-contain w-auto"
                  />
                </Link>
                <button 
                  onClick={() => setIsOpen(false)} 
                  aria-label="Cerrar menú"
                  className="text-black bg-yellow-300 p-2 rounded-full hover:bg-yellow-400 transition-colors"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center flex-grow space-y-6 bg-white bg-opacity-80">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 ${
                        isActive(link.path)
                          ? 'bg-yellow-300 text-black shadow-sm'
                          : 'text-black hover:bg-yellow-200 hover:text-black'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header