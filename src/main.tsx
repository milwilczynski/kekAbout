import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.scss';
import { ConsoleProvider } from './providers/console-provider';

console.log('import', import.meta.env);
if (import.meta.hot) {
    import.meta.hot.accept();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ConsoleProvider>
            <App />
        </ConsoleProvider>
    </React.StrictMode>,
);
