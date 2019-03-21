import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Header from './components/Header.jsx';


class App extends Component {
  
    showSettings (event) {
    event.preventDefault();
  }



  render() {
    return (
      <div className="App">
       <Header />
       

      </div>
    );
  }
}

export default App;
