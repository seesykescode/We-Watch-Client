import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { request } from './helper'


class App extends Component {
  constructor(){
    super()
    this.state = {
      streams: null
    }
  }

  componentDidMount(){
  
    request({ url: "/user/validate" })
      .then((res) => res.data)
      .then((response) => {
        if (response.token.valid) {
          request({ url: "/user/streams" })
            .then((streams) => {
               streams = streams.data
              this.setState({
                streams
              })
              
            })
        }
      })
  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    
      </div>
    );
  }
}

export default App;
