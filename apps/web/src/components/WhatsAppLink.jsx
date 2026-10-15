import React from 'react';
import { site } from '@/config/site';
import { trackWhatsAppClick } from '@/lib/track';

export function whatsappUrl(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
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
      trackWhatsAppClick(origin);
      onClick?.(event);
    }}
    {...props}
  >
    {children}
  </a>
));

export default WhatsAppLink;
