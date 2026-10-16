import './assets/fonts/fontes.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Bootstrap da aplicacao.
 * Aqui nao existe regra de negocio: apenas monta a arvore.
 */
import App from './App';

const raiz = document.getElementById('root');
ReactDOM.createRoot(raiz).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);