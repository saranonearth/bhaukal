import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const PCard=({title,description})=>{
	return(

			<div>
			      <Card className="text-center">
			        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200" alt="Card image cap" />
			        <CardBody>
			          <CardTitle style={{fontWeight:'bolder'}}>{title}</CardTitle>
			          <CardSubtitle>{description}</CardSubtitle>
			          
			          	<Button className="mt-2">Snatch</Button>
			          
			          
			        </CardBody>
			      </Card>
    		</div>

		);
}

export default PCard;