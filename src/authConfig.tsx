import { LogLevel } from '@azure/msal-browser';

export const msalConfig = {
    auth: {
        authority: 'https://login.microsoftonline.com/9fd7f379-2e25-49f7-875b-daf228cc4afd',
        clientId: 'dbdaf5d7-f19e-413d-8610-703e4952d348',
        redirectUri: 'http://localhost:3000/',
    },
    cache: {
        cacheLocation: 'sessionStorage', // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            },
        },
    },
};

export const loginApiRequest = {
    scopes: ['api://38b40156-7ea1-4ae0-844a-b69ef15dcaa8/scope.api'],
};
