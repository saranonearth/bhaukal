import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Header from './components/Header.jsx';
import Slide from './components/Slide.jsx';
import Cardlist from './components/Cardlist.jsx';
import Info from './components/Info.jsx';
class App extends Component {
  
    showSettings (event) {
    event.preventDefault();
  }



  render() {
    return (
      <div className="App">
       <Header />
       <Slide />
      <Cardlist/>
      <Info />
      </div>
    );
  }
}

export default App;
