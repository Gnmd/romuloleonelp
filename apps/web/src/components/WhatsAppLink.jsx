import React from 'react';
import { site } from '@/config/site';

export function whatsappUrl(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Registra o clique como conversão nas ferramentas que estiverem instaladas
// (Google Analytics/Tag Manager e Meta Pixel). Sem elas, não faz nada.
function trackClick(origin) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', { origin });
  }
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { origin });
  }
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: 'whatsapp_click', origin });
  }
}

// Link para o WhatsApp. `origin` identifica o botão nas métricas (hero, menu...).
const WhatsAppLink = React.forwardRef(({ origin, message, onClick, children, ...props }, ref) => (
  <a
    ref={ref}
    href={whatsappUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    data-origin={origin}
    onClick={(event) => {
      trackClick(origin);
      onClick?.(event);
    }}
    {...props}
  >
    {children}
  </a>
));

export default WhatsAppLink;
