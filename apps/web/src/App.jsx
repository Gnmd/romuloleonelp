import React from 'react';
import { MotionConfig } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Approach from '@/components/sections/Approach';
import Areas from '@/components/sections/Areas';
import Schedule from '@/components/sections/Schedule';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <About />
        <Approach />
        <Areas />
        <Schedule />
      </main>
      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  );
}

export default App;
