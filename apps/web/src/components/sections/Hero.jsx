import React from 'react';
import { Calendar, Video, GraduationCap, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppLink from '@/components/WhatsAppLink';
import { site } from '@/config/site';

const destaques = [
  { icon: Video, title: 'Telemedicina', detail: 'Atendimento online' },
  { icon: Stethoscope, title: 'Instituto Bairral', detail: 'Residência em Psiquiatria' },
  { icon: GraduationCap, title: 'UESB', detail: 'Graduação em Medicina' },
];

function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero relative isolate overflow-hidden pt-20 text-paper">
      {/* Foto que se dissolve no fundo azul-noite */}
      <div className="hero-media">
        <img
          src={site.heroPhoto.src}
          srcSet={site.heroPhoto.srcSet}
          sizes={site.heroPhoto.sizes}
          width={site.heroPhoto.width}
          height={site.heroPhoto.height}
          alt="Foto do Dr. Rômulo Leone, médico residente em psiquiatria"
        />
      </div>

      <div className="hero-inner container relative">
        <div className="max-w-[620px]">
          <p className="mb-6 flex items-center gap-3.5 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-paper-200 sm:text-[0.82rem] sm:tracking-[0.16em]">
            <span aria-hidden="true" className="h-px w-8 flex-shrink-0 bg-star sm:w-10" />
            {site.name} · {site.crm}
          </p>

          <h1 id="hero-title" className="text-[2.2rem] font-normal leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            Psiquiatria com olhar fenomenológico e ênfase na{' '}
            <em className="text-star-300">experiência do paciente</em>.
          </h1>

          <p className="mt-6 max-w-[32em] text-lg leading-relaxed text-paper/80">
            Médico residente em Psiquiatria no Instituto Bairral. Acolhimento, escuta e ciência a serviço do bem-estar.
          </p>

          <div className="mb-10 mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 md:mb-14">
            <Button
              asChild
              size="lg"
              className="h-auto w-full whitespace-nowrap rounded-full bg-star-300 px-7 py-4 text-base font-semibold text-night transition-transform hover:-translate-y-px hover:bg-[#f3e5ad] sm:w-auto"
            >
              <WhatsAppLink origin="hero">
                <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                Agendar consulta
              </WhatsAppLink>
            </Button>
            <a
              href="#abordagem"
              className="group border-b border-paper/35 pb-0.5 font-medium text-paper-200 transition-colors hover:border-white hover:text-white"
            >
              Conhecer a abordagem{' '}
              <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <ul aria-label="Destaques" className="grid border-t border-paper/15 md:grid-cols-3">
          {destaques.map(({ icon: Icon, title, detail }, index) => (
            <li
              key={title}
              className={`flex items-start gap-3.5 border-paper/15 py-4 md:py-6 md:pb-7 ${index > 0 ? 'border-t md:border-l md:border-t-0 md:pl-6' : ''} md:pr-6`}
            >
              <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-star-300" aria-hidden="true" />
              <div>
                <strong className="block font-heading text-lg font-medium text-white">{title}</strong>
                <span className="text-sm text-paper/70">{detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
