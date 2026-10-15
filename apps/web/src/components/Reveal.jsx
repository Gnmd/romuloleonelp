import React from 'react';
import { motion } from 'framer-motion';

// Entrada suave ao rolar a página. Desativada para quem prefere menos movimento
// (MotionConfig reducedMotion="user" em App.jsx).
function Reveal({ children, delay = 0, className, as = 'div' }) {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

export default Reveal;
