import React, { Component } from 'react';
import './App.css';
import Ticker from './components/Ticker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Cryto Currency header</h2>
        </header>
        <Ticker />
      </div>
    );
  }
}

export default App;
