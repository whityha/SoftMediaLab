import React from 'react';
import ReactDOM from 'react-dom/client';

import './main.sass';

import App from './components/App/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
