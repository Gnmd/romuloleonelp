import '@/index.css';
import { trackWhatsAppClick } from '@/lib/track';

// Página de links (bio do Instagram): mede os cliques no WhatsApp.
document.querySelectorAll('a[data-origin]').forEach((link) => {
	link.addEventListener('click', () => trackWhatsAppClick(link.dataset.origin));
});
