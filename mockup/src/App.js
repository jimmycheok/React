import React, { Component } from 'react'
import './App.css';

import CustomTopBar from './components/top-bar'
import CustomerSideMenu from './components/side-menu'
import CustomerCard from './components/card'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render = () => {
    return (
      <div className="App">
        <div className="container">
          <CustomTopBar></CustomTopBar>
        </div>
        <div className="container">
          <div className="d-flex flex-row text-left">
            <CustomerSideMenu></CustomerSideMenu>
            <CustomerCard></CustomerCard>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
