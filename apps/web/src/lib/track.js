// Registra cliques no WhatsApp como conversão nas ferramentas que estiverem
// instaladas (Google Analytics/Tag Manager e Meta Pixel). Sem elas, não faz nada.
export function trackWhatsAppClick(origin) {
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
