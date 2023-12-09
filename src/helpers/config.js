export const CONFIG = {
    signInRedirectURL: import.meta.env.VITE_signInRedirectURL,
    signOutRedirectURL: import.meta.env.VITE_signOutRedirectURL,
    clientID: import.meta.env.VITE_clientID,
    baseUrl: import.meta.env.VITE_baseUrl,
    scope: ['openid', 'profile'],
};