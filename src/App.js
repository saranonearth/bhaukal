import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Header from './components/Header.jsx';
import Slide from './components/Slide.jsx';
import Cardlist from './components/Cardlist.jsx';
import Info from './components/Info.jsx';
import ScrollableAnchor from 'react-scrollable-anchor';
import { push as Menu } from 'react-burger-menu';

class App extends Component {
  
    showSettings (event) {
    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <Header />
      <main id="page-wrap">
           
           <Slide />
           <Cardlist/>
           <Info />
      </main>
      
      </div>
    );
  }
}

export default App;
