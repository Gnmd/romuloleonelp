import React from 'react';
import { Calendar, ArrowDown, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/config/site';

// Pequenas "estrelas" em referência ao logo.
const stars = [
  { top: '4%', left: '-4%', size: 'h-2.5 w-2.5' },
  { top: '-3%', left: '86%', size: 'h-3 w-3' },
  { top: '38%', left: '-8%', size: 'h-1.5 w-1.5' },
  { top: '62%', left: '104%', size: 'h-2 w-2' },
];

function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container">
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <p className="font-heading text-xl text-ocean">{site.name}</p>
            <p className="mt-1 text-sm text-ink-muted">
              Médico residente em psiquiatria · {site.crm}
            </p>

            <h1 id="hero-title" className="mt-6 text-4xl font-semibold leading-[1.12] md:text-5xl lg:text-[3.4rem]">
              Psiquiatria com olhar fenomenológico e ênfase na{' '}
              <em className="font-normal text-ocean">experiência do paciente</em>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Acolhimento, escuta e ciência a serviço do bem-estar.
            </p>

            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-night">
              <Video className="h-4 w-4 text-ocean" aria-hidden="true" />
              Atendimento online (telemedicina)
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-auto whitespace-nowrap rounded-full bg-night px-8 py-4 text-base text-white hover:bg-night-700"
              >
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                  Agende sua consulta
                </a>
              </Button>
              <a
                href="#abordagem"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-3 font-medium text-night underline-offset-4 hover:underline"
              >
                Conheça a abordagem
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            {/* Arco azul-noite atrás da foto, com estrelas */}
            <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-3xl bg-night" />
            {stars.map((star, index) => (
              <span
                key={index}
                aria-hidden="true"
                className={`absolute rounded-full bg-star shadow-[0_0_12px_3px_rgba(226,201,91,0.65)] ${star.size}`}
                style={{ top: star.top, left: star.left }}
              />
            ))}
            <img
              className="relative aspect-[4/5] w-full rounded-t-full rounded-b-3xl object-cover"
              alt="Foto do Dr. Rômulo Leone, médico residente em psiquiatria"
              src={site.photo.src}
              srcSet={site.photo.srcSet}
              sizes={site.photo.sizes}
              width={site.photo.width}
              height={site.photo.height}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
