import { renderToString } from 'react-dom/server';
import 'virtual:uno.css';
import { App } from './app.tsx';

export function render() {
	const html = renderToString(<App />);
	return { html };
}
