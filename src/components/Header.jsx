import React, {Component} from 'react';
import Sidebar from './Sidebar.jsx';
import { Container} from 'reactstrap';


class Header extends Component {

	render(){
			var divstyles ={
				backgroundColor: "#1A1818",
				padding: '20px',
				fontFamily: 'Dirty Brush',
				position: 'fixed',
				zIndex: '100',
  				top: '0',
  				width: '100%'
				 
							}
		return(
				<div>
						<Sidebar />
					<div style={divstyles}>
						<Container>
							<h1 style={{fontSize:'3em'}} className="heading"
							 className="text-white text-center">
							 <a href="#" style={{color:'white'
							 ,textDecoration:'none'}}>BHAUKAL</a></h1>
						</Container>
							
						</div>
						
					
				</div>
				

			);
	}
}

export default Header;