// Dados centrais do site.
export const site = {
	name: 'Dr. Rômulo Leone',
	crm: 'CRM/SP 256.617',
	phoneDisplay: '(19) 99721-0581',
	whatsappUrl: 'https://wa.me/5519997210581?text=Ol%C3%A1%2C%20Romulo%21%20Gostaria%20de%20agendar%20uma%20consulta%2E',
	logoUrl: '/images/logo-128.webp',
	// Foto em retrato 4:5 (arquivos em public/images/).
	photo: {
		src: '/images/romulo-leone-800.webp',
		srcSet: '/images/romulo-leone-480.webp 480w, /images/romulo-leone-800.webp 800w, /images/romulo-leone-1200.webp 1200w',
		sizes: '(min-width: 768px) 448px, calc(100vw - 2.5rem)',
		width: 800,
		height: 1000,
	},
};
