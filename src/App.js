import React, { Component } from 'react';
import logo from './LOCINOX_LOGO_250x56px.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Gateway Wifi configuration</h1>
        </header>
        <div className="App-separator" >
         <div className="Color-header-desktop">
          <div className="Center"/>
         </div>
         </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
