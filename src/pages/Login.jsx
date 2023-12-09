import React from 'react';
import { useAuthContext } from '@asgardeo/auth-react';
import { Navigate } from 'react-router-dom';
import { Button, Card, Flex, Layout, Row, Spin } from 'antd';
import { COLORS, IMAGES } from '../constants';
import { CONFIG } from '../helpers/config';
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
					title={<h2>Hệ thống quản lý AG ESB</h2>}
					cover={
						<img
							alt='example'
							src={IMAGES.login_bg}
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
						{!CONFIG.clientID ?
							<div className="content">
								<h2>Bạn cần cập nhật Client ID để tiếp tục.</h2>
								<p>Vui lòng mở tệp "src/config.json" bằng trình chỉnh sửa và cập nhật giá trị <code>clientID</code> bằng Client ID của ứng dụng đã đăng ký.</p>
								<p>Truy cập repo <a
									href="https://github.com/asgardeo/asgardeo-auth-react-sdk/tree/master/samples/asgardeo-react-app">README</a> để biết thêm chi tiết</p>
							</div>
							:
							<Button
								type='primary'
								onClick={() =>
									signIn()
										.then(info => {
											console.log(info);
										})
										.catch(err => console.log(err))
								}
								style={{
									backgroundColor: COLORS.defaultPrimary
								}}
								size='large'
							>
								Đăng nhập
							</Button>}
					</Layout>
				</Card>
			}
		</Flex>
	);
};

export default Login;
