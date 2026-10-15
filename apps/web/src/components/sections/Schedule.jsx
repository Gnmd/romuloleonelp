import React from 'react';
import { MessageCircle, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import WhatsAppLink from '@/components/WhatsAppLink';
import { site } from '@/config/site';

function Schedule() {
  return (
    <section
      id="agendamento"
      aria-labelledby="agendamento-title"
      className="relative scroll-mt-20 overflow-hidden bg-night py-20 text-white md:py-28"
    >
      {/* Céu estrelado discreto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_12%_20%,rgba(226,201,91,0.9)_0_1.5px,transparent_2.5px),radial-gradient(circle_at_85%_30%,rgba(226,201,91,0.9)_0_2px,transparent_3px),radial-gradient(circle_at_70%_85%,rgba(67,165,199,0.8)_0_1.5px,transparent_2.5px),radial-gradient(circle_at_25%_80%,rgba(255,255,255,0.6)_0_1px,transparent_2px)]"
      />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionHeading id="agendamento-title" eyebrow="Agende sua consulta" title="Dar o primeiro passo pode ser mais simples do que parece." align="center" tone="dark" />
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Envie uma mensagem e agende sua consulta online.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-10 h-auto whitespace-normal rounded-full bg-star px-8 py-4 text-base font-semibold text-night hover:bg-star-300"
          >
            <WhatsAppLink origin="final">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              Agendar pelo WhatsApp
            </WhatsAppLink>
          </Button>

          <p className="mt-4 text-sm text-white/60">{site.phoneDisplay}</p>

        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-2xl">
          <div role="note" className="flex gap-4 rounded-2xl border border-white/15 bg-white/5 p-6">
            <LifeBuoy className="mt-0.5 h-6 w-6 flex-shrink-0 text-star" aria-hidden="true" />
            <div>
              <p className="font-semibold text-white">Está em crise ou pensando em se machucar?</p>
              <p className="mt-1 text-sm leading-relaxed text-white/75">
                Este canal não atende emergências. Ligue agora para o{' '}
                <a href="tel:188" className="font-semibold text-star-300 underline underline-offset-2">CVV – 188</a>{' '}
                (gratuito, 24 horas) ou para o{' '}
                <a href="tel:192" className="font-semibold text-star-300 underline underline-offset-2">SAMU – 192</a>,
                ou procure o pronto-socorro mais próximo.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Schedule;
