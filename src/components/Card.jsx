import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const PCard=({title,description})=>{
	return(

			<div>
			      <Card className="text-center mt-4">
			        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=10&txt=bhaukalTee&w=100&h=100" alt="Card image cap" />
			        <CardBody>
			          <CardTitle style={{fontWeight:'bolder'}}>{title}</CardTitle>
			          <CardSubtitle>{description}</CardSubtitle>
			          
			          	<Button className="mt-2" style={{backgroundColor:'black'}}>Snatch</Button>
			          
			          
			        </CardBody>
			      </Card>
    		</div>

		);
}

export default PCard;