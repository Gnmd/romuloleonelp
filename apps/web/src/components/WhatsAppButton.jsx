import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { site } from '@/config/site';

function WhatsAppButton() {
  return (
    <motion.a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#25D366]/40 transition-shadow duration-300 group"
      aria-label="Agendar consulta via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" aria-hidden="true" />
      
      {/* Pulse effect rings */}
      <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping -z-10 group-hover:opacity-50 duration-1000"></span>
      <span className="absolute inline-flex w-[120%] h-[120%] rounded-full bg-[#25D366] opacity-20 -z-10 group-hover:animate-ping duration-700"></span>
    </motion.a>
  );
}

export default WhatsAppButton;