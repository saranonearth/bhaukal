import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './assets/info.css';
import Icon from './assets/instagram.png';
const Info=()=>{
	

	return(
		
			
			<div>
				<div class="whoarewe" id={'About'}>
				<Container className="text-center" >
					<h1 id="main-title" >Who Are We?</h1>
					<Row >
						<Col className="text-right" sm="6" xs="6" lg="6"><img style={{borderRadius:'100%'}} src="https://placeholdit.imgix.net/~text?txtsize=10&txt=bhaukalTee&w=200&h=200" alt=""/><figcaption id="left">Sarthak</figcaption></Col>
						<Col className="text-left"sm="6" xs="6" lg="6"><img style={{borderRadius:'100%'}} src="https://placeholdit.imgix.net/~text?txtsize=10&txt=bhaukalTee&w=200&h=200" alt=""/><figcaption id="right">SARAN</figcaption></Col>
					</Row>
					<Row >
					<div class="text-center">
						<p id="main-description" >Lorem ipsum dolor sit amet, consectetur 
					adipisicing elit. Esse voluptatibus animi atque pariatur vel incidunt quisquam
					 id architecto quibusdam culpa nisi natus sit soluta magnam ut, sed vitae cupiditate
					  quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus numquam, quia tenetur, 
					  fugiat est vitae voluptates nesciunt iste deserunt blanditiis 
					  officiis nam suscipit amet ab non maxime doloremque vel, quibusdam.lorem Lorem ipsum dolor
					   sit amet, consectetur adipisicing elit. Nisi molestiae consequuntur aut, quo sequi odio saepe d
					   istinctio, ad officiis in voluptatibus fu
					  git. Doloremque asperiores fugit molestiae ex voluptates, non ipsum!</p>
					</div>
						
					</Row>
					
				</Container>
					
				</div>
				<div>
					
						<a href=""><img idsrc={Icon} alt="instaicon"/></a>
					
				</div>
				<footer>
					Bhaukal &copy; 2019
				</footer>
			</div>
		);
}

export default Info;