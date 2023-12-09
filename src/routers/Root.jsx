import React, { useEffect } from 'react'
import {
	AppstoreOutlined,
	DashboardOutlined,
	LogoutOutlined,
	QuestionOutlined,
	SettingOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Hooks, useAuthContext } from '@asgardeo/auth-react'
import { Management } from '../pages'


function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	}
}

const items = [
	getItem('AG ESB Manager', 'dashboard', <DashboardOutlined />
	),
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
]



export const Root = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const {
		token: { colorBgContainer },
	} = theme.useToken()

	const onClick = e => {
		switch (e.key.toString()) {
			case '14':
				signOut()
				break
			default:
				break
		}
	}

	const { state, signOut, on } = useAuthContext()
	// console.log({ state })






	const search = useLocation().search
	const stateParam = new URLSearchParams(search).get('state')
	const errorDescParam = new URLSearchParams(search).get('error_description')
	console.log({ stateParam, errorDescParam })

	useEffect(() => {
		console.log("run eff")
		on(Hooks.HttpRequestError, () => {
			console.log("HttpRequestError")
		})
		on(Hooks.SignOut, () => {
			console.log("Logout")
		})
		on(Hooks.SignOutFailed, () => {
			console.log("logout failure1")
			if (!errorDescParam) {
				console.log("logout failure")
			}
		})
	}, [on])



	if (!state.isAuthenticated) return <Navigate to={'/login'} />

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
					// width: 256,
					// maxWidth: 256,
				}}
			>
				<Menu
					onClick={onClick}
					defaultSelectedKeys={['dashboard']}
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
					marginLeft: 190,
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
							minHeight: 650,
							background: colorBgContainer,
							height: 'calc(100vh - 179px)'
						}}
					>
						{location.pathname == '/' ? <Management /> : <Outlet />}
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
	)
}
