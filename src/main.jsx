import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers';
import App from './App'
import { AuthProvider } from '@asgardeo/auth-react';

const config = {
	signInRedirectURL: import.meta.env.VITE_signInRedirectURL,
	signOutRedirectURL: import.meta.env.VITE_signOutRedirectURL,
	clientID: import.meta.env.VITE_clientID,
	baseUrl: import.meta.env.VITE_baseUrl,
	scope: ['openid', 'profile'],
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider config={config}>
			<RouterProvider router={router} />
			{/* <App /> */}
		</AuthProvider>
	</React.StrictMode>
);
