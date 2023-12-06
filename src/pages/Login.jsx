import React from 'react';
import { useAuthContext } from '@asgardeo/auth-react';
import { Navigate } from 'react-router-dom';
import { Button, Card, Flex, Layout, Row, Spin } from 'antd';
import image from '../assets/10385698_3683.jpg';
const Login = () => {
	const { signIn, state } = useAuthContext();
	// console.log({ state1: state });

	if (state.isAuthenticated) return <Navigate to={'/'} />;

	return (
		<Flex
			justify='center'
			align='center'
			// flex={1}
			style={{
				// background: 'red',
				// height: '100%',
				minHeight: '98vh',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{state.isLoading ? <Spin size="large" /> :
				<Card
					title='Hệ thống AG ESB MANAGER'
					cover={
						<img
							alt='example'
							src={image}
							height={250}
							style={{
								borderRadius: 0,
								padding: 24,
								width: '94%',
							}}
						/>
					}
					style={{ textAlign: 'center' }}
				>
					<Layout>
						<Button
							type='primary'
							onClick={() =>
								signIn()
									.then(info => {
										console.log(info);
									})
									.catch(err => console.log(err))
							}
							size='large'
						>
							Đăng nhập
						</Button>
					</Layout>
				</Card>
			}
		</Flex>
	);
};

export default Login;
