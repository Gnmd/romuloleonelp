import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

const container = document.getElementById('root');

if (container.hasChildNodes()) {
	ReactDOM.hydrateRoot(container, <App />);
} else {
	ReactDOM.createRoot(container).render(<App />);
}
