import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { msalConfig } from './authConfig';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const msalInstance = new PublicClientApplication(msalConfig);

root.render(
    <React.StrictMode>
        <MsalProvider instance={msalInstance}>
            <App />
        </MsalProvider>
    </React.StrictMode>
);
