import React from 'react';
import { Info } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { site } from '@/config/site';

const passos = [
  {
    title: 'Fale pelo WhatsApp',
    description: (
      <>
        Envie uma mensagem para <span className="whitespace-nowrap">{site.phoneDisplay}</span> contando, se quiser,
        um pouco do que está buscando.
      </>
    ),
  },
  {
    title: 'Escolha o melhor horário',
    description: 'Você recebe as opções de agenda, o valor da consulta e as orientações para o dia.',
  },
  {
    title: 'Consulta online',
    description: 'Por videochamada, de onde você estiver, com tempo para conhecer a sua história e definir juntos os próximos passos.',
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-title" className="scroll-mt-20 py-20 md:py-28">
      <div className="container">
        <Reveal className="max-w-3xl">
          <SectionHeading id="como-funciona-title" eyebrow="Como funciona" title="Do primeiro contato à consulta, em três passos" />
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {passos.map((passo, index) => (
            <Reveal as="li" key={passo.title} delay={index * 0.08} className="flex gap-5">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-night font-heading text-lg text-star-300"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold">{passo.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{passo.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14">
          <p className="flex gap-3 rounded-2xl border border-paper-200 bg-white p-5 text-ink-muted">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-ocean" aria-hidden="true" />
            Atendimento exclusivamente particular. Você recebe recibo para solicitar reembolso ao seu plano de saúde,
            conforme as regras do seu contrato.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default HowItWorks;
