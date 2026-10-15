// Dados centrais do site.
export const site = {
	name: 'Dr. Rômulo Leone',
	crm: 'CRM/SP 256.617',
	phoneDisplay: '(19) 99721-0581',
	whatsappNumber: '5519997210581',
	whatsappMessage: 'Olá, Dr. Rômulo! Vim pelo site e gostaria de agendar uma consulta.',
	// Consulta pública de médicos no portal do CFM.
	crmLookupUrl: 'https://portal.cfm.org.br/busca-medicos/',
	logoUrl: '/images/logo-128.webp',
	// Foto quadrada da seção principal (arquivos em public/images/).
	heroPhoto: {
		src: '/images/romulo-leone-hero-1000.webp',
		srcSet: '/images/romulo-leone-hero-600.webp 600w, /images/romulo-leone-hero-1000.webp 1000w',
		sizes: '(max-width: 860px) 100vw, 54vw',
		width: 1000,
		height: 1000,
	},
};
