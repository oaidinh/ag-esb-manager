import React from 'react';
import { useAuthContext } from '@asgardeo/auth-react';
const Page = () => {
	const { state, signIn, signOut } = useAuthContext();
	console.log({ state });

	const handleSignin = () => {
		signIn().catch(err => console.log(err))
	}
	const handleSigout = () => {
		signOut().catch(err => console.log(err))
	}

	return (
		<div className='App'>
			{state.isAuthenticated ? (
				<div>
					<ul>
						<li>{JSON.stringify(state)}</li>
					</ul>

					<button onClick={handleSigout}>Logout</button>
				</div>
			) : (
				<button onClick={handleSignin}>Login</button>
			)}
		</div>
	);
};

export default Page;
