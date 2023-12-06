import React from 'react';
import {
	AppstoreOutlined,
	DashboardOutlined,
	LogoutOutlined,
	QuestionOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuthContext } from '@asgardeo/auth-react';
function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}
const items = [
	getItem('Dashboard', 'sub1', <DashboardOutlined />, [
		getItem('Micro Integrator', 'g1', null, [getItem('MI Dashboard', '1')], 'group'),
		getItem(
			'Metric',
			'g2',
			null,
			[getItem('Monitor', '3'), getItem('Metric Dashboard', '4')],
			'group'
		),
	]),
	getItem('WSO2', 'sub2', <AppstoreOutlined />, [
		getItem('API Manager', '5'),
	]),
	{
		type: 'divider',
	},
	getItem(
		'Settings',
		'grp',
		<SettingOutlined />,
		[
			getItem('Help', '13', <QuestionOutlined />),
			getItem('SignOut', '14', <LogoutOutlined />),
		],
		'group'
	),
];
export const Root = () => {
	const navigate = useNavigate();
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const onClick = e => {
		switch (e.key.toString()) {
			case '1':
				navigate('/management');
				break;
			case '14':
				signOut()
				break;
			default:
				break;
		}
	};

	const { state, signOut } = useAuthContext();
	// console.log({ state });

	if (!state.isAuthenticated) return <Navigate to={'/login'} />;

	return (
		<Layout>
			<Sider
				theme='light'
				breakpoint='lg'
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0,
					top: 0,
					bottom: 0,
					width: 256,
					maxWidth: 256,
				}}
			>
				<Header
					style={{
						padding: 5,
						background: colorBgContainer,
					}}
				>
					<div
						style={{
							textAlign: 'center',
						}}
					>
						<Link to={'/'} >AG ESB Manager</Link>
					</div>
				</Header>
				<Menu
					onClick={onClick}
					// defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1', 'sub2']}
					mode='inline'
					theme='light'
					items={items}
					style={{
						height: 'calc(100% - 64px)',
					}}
				/>
			</Sider>
			<Layout
				className='site-layout'
				style={{
					marginLeft: '10.0%',
				}}
			>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				><div style={{ textAlign: "center", fontWeight: "bold", fontSize: 25 }} >Chào mừng đến với hệ thống quản lý AG ESB</div></Header>
				<Content
					style={{
						margin: '24px 16px 0',
					}}
				>
					<div
						style={{
							padding: 24,
							minHeight: 360,
							background: colorBgContainer,
						}}
					>
						<Outlet />
					</div>
				</Content>
				<Footer
					style={{
						textAlign: 'center',
					}}
				>
					Mekosoft ©2023 Created by Mekosoft Team
				</Footer>
			</Layout>
		</Layout>
	);
};
