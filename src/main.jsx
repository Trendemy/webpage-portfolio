import { createRoot } from 'react-dom/client';
import '@config/firebase';
import App from './app';
import '@assets/styles/index.css';

createRoot(document.getElementById('root')).render(<App />);
