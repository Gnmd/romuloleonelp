import React from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const areasDeAtuacao = [
  { title: 'Ansiedade', description: 'Tratamento especializado para transtornos de ansiedade' },
  { title: 'Depressão', description: 'Acompanhamento humanizado e baseado em evidências' },
  { title: 'Transtorno Bipolar', description: 'Manejo clínico e suporte contínuo' },
  { title: 'Transtornos de Personalidade', description: 'Abordagem individualizada e empática' },
  { title: 'Esquizofrenia e Transtornos Psicóticos', description: 'Cuidado integral e multidisciplinar' },
  { title: 'Sofrimentos Emocionais', description: 'Escuta acolhedora para todas as demandas' },
];

function Areas() {
  return (
    <section id="atuacao" aria-labelledby="atuacao-title" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading id="atuacao-title" eyebrow="Atuação" title="Áreas de atuação" />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areasDeAtuacao.map((area, index) => (
            <Reveal
              as="li"
              key={area.title}
              delay={index * 0.06}
              className="rounded-2xl border border-paper-200 bg-paper p-6 transition-colors duration-300 hover:border-ocean/40"
            >
              <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-star shadow-[0_0_10px_2px_rgba(226,201,91,0.55)]" />
              <h3 className="mt-5 text-xl font-semibold">{area.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{area.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Areas;
