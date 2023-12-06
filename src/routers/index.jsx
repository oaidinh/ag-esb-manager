import ErrorPage from '../layout/ErrorPage.jsx';
import { Login, Management } from '../pages';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Root } from './Root.jsx';

const AuthLayout = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default createBrowserRouter([
	{
		element: <AuthLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/',
				element: <Root />,
				children: [
					{
						path: '/management',
						element: <Management />,
					},
				],
			},
		],
	},
]);
