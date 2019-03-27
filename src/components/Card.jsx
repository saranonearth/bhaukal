import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class PCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

   this.toggle = this.toggle.bind(this);
  }

toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


	render(){
		return(

			<div>
			      <Card className="text-center mt-4">
			        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=10&txt=bhaukalTee&w=100&h=100" alt="Card image cap" />
			        <CardBody>
			          <CardTitle style={{fontWeight:'bolder'}}>{this.props.title}</CardTitle>
			          <CardSubtitle>{this.props.description}</CardSubtitle>
			          
			          	<Button className="mt-2" onClick={this.toggle} style={{backgroundColor:'black'}}>Get</Button>
			          
			          
			        </CardBody>
			      </Card>

{/*MODAL FOR INSTAGRAM REDIRECTING*/}

			         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
         				 <ModalHeader toggle={this.toggle}>Yo! There</ModalHeader>
          				<ModalBody>
           				 This site is under development so currently we take orders upon Instagram DM. Feel free to DM us on Instagram to get your Bhaukal Tee. 
          				</ModalBody>
          			<ModalFooter className="text-center">
            			<Button style={{backgroundColor:'black'}}><a style={{textDecoration: 'none',color:'white'}} href="https://www.instagram.com/bhaukal_fashion/">Open on Instagram</a></Button>{' '}
           				<Button color="secondary" onClick={this.toggle}>Cancel</Button>
         			 </ModalFooter>
        			</Modal>
    		</div>

			);
	}



}
export default PCard;