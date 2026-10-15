import React from 'react';
import WhatsAppLink from '@/components/WhatsAppLink';
import { site } from '@/config/site';

function Footer() {
  return (
    <footer className="bg-night-900 py-14 text-white/70">
      <div className="container max-w-4xl text-center">
        <div className="flex items-center justify-center gap-3">
          <img src={site.logoUrl} alt="" width="36" height="36" className="h-9 w-9" />
          <span className="font-heading text-2xl font-semibold text-white">{site.name}</span>
        </div>

        <p className="mt-5">Médico residente em psiquiatria | {site.crm} | NÃO ESPECIALISTA</p>
        <p>Formado pela UESB | Residente no Instituto Bairral</p>
        <p className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <WhatsAppLink origin="rodape" className="text-white underline-offset-4 hover:underline">
            WhatsApp {site.phoneDisplay}
          </WhatsAppLink>
          <a href={site.crmLookupUrl} target="_blank" rel="noopener noreferrer" className="text-white underline-offset-4 hover:underline">
            Consultar CRM no portal do CFM
          </a>
        </p>

        <div className="mt-8 space-y-4 border-t border-white/10 pt-8 text-sm leading-relaxed">
          <p className="text-white/85">
            Em emergência ou crise, ligue{' '}
            <a href="tel:188" className="font-semibold text-white underline underline-offset-2">188 (CVV)</a> ou{' '}
            <a href="tel:192" className="font-semibold text-white underline underline-offset-2">192 (SAMU)</a>.
          </p>
          <p>
            Este site tem caráter exclusivamente informativo e segue as normas de publicidade médica do CFM.
            As informações aqui contidas não substituem a avaliação médica individualizada.
          </p>
        </div>

        <p className="mt-8 text-sm text-white/50" suppressHydrationWarning>
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
