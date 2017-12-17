import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { request } from './helper'

import StreamList from './components/StreamList/StreamList.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      streams: null, 
      selectedStream: null,
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

        <a href="https://we-watch-twitch-server.herokuapp.com/auth/login">Login</a>
        <a href="https://we-watch-twitch-server.herokuapp.com/auth/logOut">logOut</a>

        <StreamList 
          onStreamSelect={selectedStream => this.setState({selectedStream})} 
        streams={this.state.streams} 
        />
      </div>
    );
  }
}

export default App;
