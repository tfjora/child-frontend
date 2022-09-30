export const msalConfig = {
    auth: {
        authority: 'https://login.microsoftonline.com/common',
        clientId: 'dbdaf5d7-f19e-413d-8610-703e4952d348',
        redirectUri: 'http://localhost:3000',
    },
    cache: {
        cacheLocation: 'sessionStorage', // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
};

export const loginApiRequest = {
    scopes: ['api://38b40156-7ea1-4ae0-844a-b69ef15dcaa8/scope.api'],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: 'Enter_the_Graph_Endpoint_Here/v1.0/me',
};
