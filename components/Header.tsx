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
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        {/* Contenedor con ancho máximo */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
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
                  width={120}
                  height={40}
                  className="h-auto object-contain"
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className={`text-base font-medium transition-colors duration-300 ${
                      isActive(link.path)
                        ? 'text-yellow-500 font-semibold'
                        : 'text-gray-600 hover:text-yellow-400'
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
                className="text-yellow-500"
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
              className="fixed top-0 left-0 w-full h-screen bg-yellow-50 flex flex-col"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex justify-between items-center p-4 border-b border-yellow-100">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center"
                >
                  <Image
                    src="/LOGO IKIDS.png"
                    alt="iKids Kinder Garden"
                    width={100}
                    height={35}
                    className="h-auto object-contain"
                  />
                </Link>
                <button 
                  onClick={() => setIsOpen(false)} 
                  aria-label="Cerrar menú"
                >
                  <CloseIcon className="w-6 h-6 text-yellow-500" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center flex-grow space-y-6">
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
                      className={`text-xl font-medium ${
                        isActive(link.path)
                          ? 'text-yellow-500 font-semibold'
                          : 'text-gray-700 hover:text-yellow-400'
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