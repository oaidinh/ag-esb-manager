import { Flex } from 'antd';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<Flex
			justify='center'
			align='center'
			style={{
				// background: 'red',
				minHeight: '50vh',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
			</div>
		</Flex>
	);
}
