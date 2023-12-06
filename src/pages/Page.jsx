import React from 'react';
import { useAuthContext } from '@asgardeo/auth-react';
const Page = () => {
	const { state, signIn, signOut } = useAuthContext();
	console.log({ state });
	return (
		<div className='App'>
			{state.isAuthenticated ? (
				<div>
					<ul>
						<li>{JSON.stringify(state)}</li>
					</ul>

					<button onClick={() => signOut()}>Logout</button>
				</div>
			) : (
				<button onClick={() => signIn().catch(err => console.log(err))}>Login</button>
			)}
		</div>
	);
};

export default Page;
