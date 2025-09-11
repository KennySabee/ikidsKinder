// components/WhatsAppButton.jsx o components/WhatsAppButton.tsx
'use client'; // Necesario porque usamos hooks y componentes de cliente

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';

const WHATSAPP_LINK = "https://walink.co/6a6b60";

const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={WHATSAPP_LINK}
        target="_blank"
        className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-green-500/50"
        aria-label="Contacto por WhatsApp"
        rel="noopener noreferrer" // Buena práctica para seguridad
      >
        <BsWhatsapp className="text-white text-2xl" />
      </Link>
    </motion.div>
  );
};

export default WhatsAppButton;