import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var Greeter=React.createclass({
  render: function(){
    return(
      <div>
        <h1 className="App-title">Welcome to React</h1>
      </div>
    );

  }
});
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
        <greeter/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
