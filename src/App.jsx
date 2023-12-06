import './App.css';
import { AuthProvider } from '@asgardeo/auth-react';
import { Page } from './pages';
function App() {
	const config = {
		signInRedirectURL: 'http://localhost:5173',
		signOutRedirectURL: 'http://localhost:5173',
		clientID: 'OBCeRO4eFLb7PvNMDmG7zVs4VBca',
		baseUrl: 'https://is-cluster-server:9443',
		scope: ['openid', 'profile'],
	};
	return (
		<AuthProvider config={config}>
			<Page />
		</AuthProvider>
	);
}

export default App;
