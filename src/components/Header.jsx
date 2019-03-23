import React, {Component} from 'react';
import Sidebar from './Sidebar.jsx';
import { Container} from 'reactstrap';
import './assets/header.css';


class Header extends Component {

	render(){
			var divstyles ={
				backgroundColor: "#1A1818",
				fontFamily: 'Dirty Brush',
				padding: '15px',
				position: 'fixed',
				zIndex: '100',
  				top: '0',
  				width: '100%'
				 
							}
		return(
				<div>
						<Sidebar />
					<div style={divstyles} id="header">
						<Container>
							<h1 className="heading"
							 className="text-white text-center">
							 <a href="/" id="main-heading" >BHAUKAL</a></h1>
							

						</Container>
							
						</div>
						
					
				</div>
				

			);
	}
}

export default Header;