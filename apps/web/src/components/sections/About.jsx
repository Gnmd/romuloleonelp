import React from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const formacao = [
  { label: 'Graduação', value: 'Medicina — Universidade Estadual do Sudoeste da Bahia (UESB)' },
  { label: 'Residência', value: 'Psiquiatria — Instituto Bairral (em andamento)' },
];

function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="container grid gap-12 md:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Reveal>
          <SectionHeading id="sobre-title" eyebrow="Sobre" title="Quem sou" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              Sou médico formado pela <strong className="font-semibold text-night">Universidade Estadual do Sudoeste da Bahia (UESB)</strong> e
              residente em Psiquiatria no <strong className="font-semibold text-night">Instituto Bairral</strong>.
            </p>
            <p>
              Busco valorizar a sua história e ofereço uma escuta cheia de empatia e respeito, criando um espaço seguro e
              acolhedor para você se expressar sem medo.
            </p>
          </div>

          <dl className="mt-10 divide-y divide-paper-200 border-y border-paper-200">
            {formacao.map((item) => (
              <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <dt className="text-sm font-semibold uppercase tracking-wider text-ocean">{item.label}</dt>
                <dd className="text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
