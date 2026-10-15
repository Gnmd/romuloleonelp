import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import WhatsAppLink from '@/components/WhatsAppLink';

// Botão flutuante: aparece depois que a pessoa rola além da seção principal e
// some enquanto a seção de agendamento (que já tem o botão) está na tela.
function WhatsAppButton() {
  const [scrolled, setScrolled] = useState(false);
  const [scheduleInView, setScheduleInView] = useState(false);
  const visible = scrolled && !scheduleInView;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const schedule = document.getElementById('agendamento');
    const observer = schedule && 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => setScheduleInView(entry.isIntersecting))
      : null;
    observer?.observe(schedule);

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <WhatsAppLink
      origin="flutuante"
      aria-label="Agendar consulta pelo WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2.5 rounded-full bg-[#1fa855] py-3.5 pl-4 pr-5 font-semibold text-white shadow-[0_10px_28px_-8px_rgba(31,168,85,0.6)] transition-all duration-300 hover:bg-[#17924a] ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-24 opacity-0'}`}
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      Agendar
    </WhatsAppLink>
  );
}

export default WhatsAppButton;
