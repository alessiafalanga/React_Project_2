import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //Chiamiamo il div root per dire a React che questa è la root del progetto; dove viene renderizzata
root.render(<App />); //gli sto dicendo: sostituisci il contentuo di root (vuoto) con il contenuto del componente App

