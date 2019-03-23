import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './assets/info.css';
import Icon from './assets/instagram.png';
import './assets/header.css';
const Info=()=>{
	

	return(
		
			
			<div>
				<div class="whoarewe" id={'About'}>
				<Container className="text-center" >
					<h1 id="main-title" >Who Are We?</h1>
					<Row >
						<Col className="text-right" sm="6" xs="6" lg="6"><img style={{borderRadius:'100%'}} src="https://placeholdit.imgix.net/~text?txtsize=10&txt=bhaukalTee&w=200&h=200" class="waw-img"alt=""/><figcaption id="left">Sarthak</figcaption></Col>
						<Col className="text-left"sm="6" xs="6" lg="6"><img style={{borderRadius:'100%'}} src="https://placeholdit.imgix.net/~text?txtsize=10&txt=bhaukalTee&w=200&h=200" class="waw-img" alt=""/><figcaption id="right">SARAN</figcaption></Col>
					</Row>
					<Row >
					<Col>
						<p id="main-desc">
							Lorem ipsum dolor sit amet
							, consectetur adipisicing elit.
							 Nisi error ipsa hic ducimus aspernatur
							  earum quisquam vero architecto
							   itaque accusamus ullam optio nobis quam, 
							   quidem numquam quasi, est atque distinctio.Lorem ipsu
							   m dolor sit amet, consectetur adipisicing elit. Praes
							   entium iste atque eius culpa eveniet, officiis quam adip
							   isci numquam sapiente, libero eaque odio modi sint ad, do
							   lore amet explicabo quae id.
						</p>
					</Col>
						
					</Row>
					
				</Container>
					
				</div>
				<div class="contact-section" id="Contact">
					<ul class="section">
						<li><a href="https://www.instagram.com/bhaukal_fashion/"><img src={Icon} id="insta-logo" alt="insta-icon"/></a></li>
						<li><p><a id="insta-id" href="https://www.instagram.com/bhaukal_fashion/">bhaukal_fashion</a></p></li>
					</ul>
							
							
		
						
					
				</div>
				<footer>
					Bhaukal &copy; 2019
				</footer>
			</div>
		);
}

export default Info;