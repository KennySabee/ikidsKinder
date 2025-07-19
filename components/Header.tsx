'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuIcon, CloseIcon } from './icons'
import { motion, AnimatePresence } from 'framer-motion'

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
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo animado */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="text-4xl font-heading tracking-wider">
              <span className="text-pink-400">i</span>
              <span className="text-yellow-400">K</span>
              <span className="text-blue-400">i</span>
              <span className="text-green-400">d</span>
              <span className="text-purple-400">s</span>
            </Link>
          </motion.div>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Link
                  href={link.path}
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-pink-500 font-bold'
                      : 'text-gray-600 hover:text-pink-400'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="text-pink-500" aria-label="Abrir menú">
              <MenuIcon className="w-8 h-8" />
            </button>
          </div>
        </nav>
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
              className="fixed top-0 left-0 w-full h-screen bg-pink-50 flex flex-col"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex justify-between items-center p-6 border-b border-pink-100">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-heading tracking-wider"
                >
                  <span className="text-pink-400">i</span>
                  <span className="text-yellow-400">K</span>
                  <span className="text-blue-400">i</span>
                  <span className="text-green-400">d</span>
                  <span className="text-purple-400">s</span>
                </Link>
                <button onClick={() => setIsOpen(false)} aria-label="Cerrar menú">
                  <CloseIcon className="w-8 h-8 text-pink-500" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center flex-grow space-y-8">
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
                      className={`text-3xl font-heading ${
                        isActive(link.path)
                          ? 'text-pink-500 font-bold'
                          : 'text-gray-700 hover:text-pink-400'
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
