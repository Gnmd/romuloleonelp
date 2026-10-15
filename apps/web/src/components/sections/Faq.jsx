import React from 'react';
import { Plus } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const perguntas = [
  {
    question: 'A consulta é coberta por plano de saúde?',
    answer: 'O atendimento é exclusivamente particular. Após a consulta você recebe recibo e, se o seu plano oferecer reembolso, pode solicitá-lo diretamente à operadora.',
  },
  {
    question: 'Como funciona a consulta online?',
    answer: 'A consulta é feita por videochamada, pelo celular ou computador. Basta estar em um lugar reservado e com boa conexão; o link e as orientações são enviados no agendamento.',
  },
  {
    question: 'A teleconsulta funciona tão bem quanto a presencial?',
    answer: 'Para a maior parte das situações, sim. A consulta por vídeo permite uma avaliação completa e o acompanhamento regular. Receitas, inclusive de medicamentos controlados quando permitido pela legislação, e atestados são emitidos digitalmente.',
  },
  {
    question: 'Posso incluir um familiar na consulta?',
    answer: 'Sim. Em muitos casos a participação de um familiar ajuda na compreensão da história e no tratamento. Isso pode ser combinado no agendamento, sempre respeitando a sua privacidade.',
  },
  {
    question: 'O que devo ter em mãos na primeira consulta?',
    answer: 'Se tiver, separe receitas e medicações em uso, exames recentes e relatórios de tratamentos anteriores. Uma lista com suas principais dúvidas também ajuda.',
  },
  {
    question: 'Qual o valor da consulta?',
    answer: 'O valor e as formas de pagamento são informados pelo WhatsApp no momento do agendamento.',
  },
];

function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="container grid gap-12 md:grid-cols-[1fr_1.6fr] lg:gap-20">
        <Reveal>
          <SectionHeading id="duvidas-title" eyebrow="Dúvidas frequentes" title="Antes de agendar" />
        </Reveal>

        <Reveal delay={0.1} className="divide-y divide-paper-200 border-y border-paper-200">
          {perguntas.map((item) => (
            <details key={item.question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-heading text-lg font-medium text-night [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus className="h-5 w-5 flex-shrink-0 text-ocean transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="pb-5 pr-10 leading-relaxed text-ink-muted">{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Faq;
