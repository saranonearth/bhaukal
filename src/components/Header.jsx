import React, {Component} from 'react';
import Sidebar from './Sidebar.jsx';



class Header extends Component {

	render(){
			var divstyles ={
				backgroundColor: "#1A1818",
				padding: '30px',
				fontFamily: 'Dirty Brush',
							}
		return(
				<div>
						<Sidebar />
					<div style={divstyles}>
						<div className="container">
							<h1 style={{fontSize:'3em'}} className="heading" className="text-white text-center">BHAUKAL</h1>
						</div>
						
					</div>
				</div>
				

			);
	}
}

export default Header;