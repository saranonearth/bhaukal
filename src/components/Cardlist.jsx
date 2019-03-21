import React from 'react';
import Card from './Card.jsx';
import { Container, Row, Col } from 'reactstrap';


const Cardlist=()=>{
	const list=[
		{
			title: 'Product1',
			description: 'Lorem ipsum dolor.'
		},
		{
			title: 'Product2',
			description: 'Lorem ipsum dolor.'
		},
		{
			title: 'Product3',
			description: 'Lorem ipsum dolor.'
		},
		{
			title: 'Product4',
			description: 'Lorem ipsum dolor.'
		},
		{
			title: 'Product5',
			description: 'Lorem ipsum dolor.'
		},
		{
			title: 'Product6',
			description: 'Lorem ipsum dolor.'
		}
	];

	const productlist = list.map(product=>{
		return <Col sm="6" xs="6" lg="4"><Card title={product.title} description={product.description}/></Col>
	})
	return(
		<div>
			<h1 className="display-4 text-center mt-3">Tees</h1>
			<Container className="mt-4">
				<Row>
					{productlist}
				</Row>
          			
       		 
			</Container>
			 
		</div>
		);

}

export default Cardlist;