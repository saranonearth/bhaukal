import React ,{Component} from 'react';
import { bubble as Menu } from 'react-burger-menu';
import Button from './assets/mbutton.svg';
import ScrollableAnchor from 'react-scrollable-anchor';


class Sidebar extends Component {
	 showSettings (event) {
    event.preventDefault();
  	}

  

	render() {
		
			var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#1A1818',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#1A1818'
  },
  bmItemList: {

  	marginLeft:'45px',
  	
    color: 'white',
    padding: '0.8em'
  },
  bmItem: {
    display: 'block',
    textDecoration: 'none',
  	marginBottom: '10px',
  	color: '#d1d1d1',
  	transition: 'color 0.2s'
  },


 
}

		return (
		      <Menu styles={ styles } noOverlay customBurgerIcon={ false }customBurgerIcon={ <img src={Button} /> }>
		        <a id="home" className="menu-item" href="/">Home</a>
		        <a id="tshirts" className="menu-item" href="#T-Shirts">T-Shirts</a>
		        <a id="waw" className="menu-item" href="#About">Who Are We?</a>
		        <a id="contact" className="menu-item" href="#Contact">Contact</a>
		        
		      </Menu>
		);
	}
}

export default Sidebar;