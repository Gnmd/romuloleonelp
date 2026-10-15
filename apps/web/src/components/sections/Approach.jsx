import React from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const pilares = [
  { title: 'Escuta e acolhimento', description: 'Escuta empática e respeitosa, com foco em você.' },
  { title: 'Avaliação detalhada', description: 'Análise completa e cuidadosa da sua história.' },
  { title: 'Baseado em evidências', description: 'Psicofarmacologia guiada pela ciência e atualização constante.' },
  { title: 'Olhar fenomenológico', description: 'Ênfase na subjetividade e na forma como você vive a sua experiência.' },
];

function Approach() {
  return (
    <section id="abordagem" aria-labelledby="abordagem-title" className="scroll-mt-20 py-20 md:py-28">
      <div className="container">
        <Reveal className="max-w-3xl">
          <SectionHeading id="abordagem-title" eyebrow="Abordagem" title="Um tratamento construído com você" />
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Cada tratamento é construído de forma individualizada, integrando avaliação clínica detalhada,
            psicofarmacologia baseada em evidências e escuta humanizada.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((pilar, index) => (
            <Reveal as="li" key={pilar.title} delay={index * 0.08} className="border-t-2 border-night pt-6">
              <span className="font-heading text-sm italic text-ocean" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{pilar.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{pilar.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Approach;
