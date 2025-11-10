import { createRoot } from 'react-dom/client';
import 'virtual:uno.css';
import { App } from './app.tsx';

createRoot(document.getElementById('root')!).render(<App />);
