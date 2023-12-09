import React from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';


const items = [
	{
		id: 1,
		href: "http://ag-esb-manager:8080/saml2-web-app-pickup-dispatch.com/",
		alt: "saml2-web-app-pickup-dispatch",
		image: IMAGES.pickup_dispatch,
		title: "Pickup Dispatch",
		desc: "saml2 web app pickup dispatch"
	},
	{
		id: 2,
		href: "http://ag-esb-manager:8080/saml2-web-app-pickup-manager.com/",
		alt: "saml2-web-app-pickup-manager",
		image: IMAGES.pickup_manager,
		title: "Pickup Manager",
		desc: "saml2 web app pickup manager"
	}

]


const Management = () => {
	const { Meta } = Card;
	return (
		<Row gutter={8} >
			{items.map((item, index) => {
				return (
					<Col span={4} key={item.id} >
						<Link to={item.href} target='_blank'>
							<Card
								// style={{ width: 250 }}
								cover={
									<img
										alt={item.alt}
										src={item.image}
										height={250}
									/>
								}
							>
								<Meta
									title={item.title}
									description={item.desc}
								/>
							</Card>
						</Link>
					</Col>
				)
			})}
		</Row>
	)
};

export default Management;
