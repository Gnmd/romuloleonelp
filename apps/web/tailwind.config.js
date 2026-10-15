/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		container: {
			center: true,
			padding: '1.25rem',
			screens: {
				'2xl': '1200px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				heading: ['Lora', 'Georgia', 'serif'],
			},
			colors: {
				// Paleta da marca, extraída do logo (cabeça com a "Noite Estrelada").
				night: { DEFAULT: '#001a58', 900: '#000f36', 700: '#0a2a75' },
				ocean: { DEFAULT: '#1060ab', 50: '#eef5fb', 100: '#d9e8f5' },
				sky: { DEFAULT: '#43a5c7' },
				star: { DEFAULT: '#e2c95b', 300: '#ecd98a' },
				paper: { DEFAULT: '#faf7f1', 200: '#f2ece0' },
				ink: { DEFAULT: '#1b2540', muted: '#4a5571' },

				// Tokens usados pelos componentes shadcn/ui.
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
