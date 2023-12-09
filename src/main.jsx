import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers';
import App from './App'
import { AuthProvider } from '@asgardeo/auth-react';
import { CONFIG } from './helpers/config';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider config={CONFIG}>
			<RouterProvider router={router} />
			{/* <App /> */}
		</AuthProvider>
	</React.StrictMode>
);
