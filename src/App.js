import React, { Component } from 'react';
import './App.css';
import { request } from './helper'

import StreamList from './components/StreamList/StreamList.js'
import StreamView from './components/StreamView/StreamView.js'


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

        <a href="https://we-watch-twitch-server.herokuapp.com/auth/login">Login</a>
        <a href="https://we-watch-twitch-server.herokuapp.com/auth/logOut">logOut</a>

        <StreamList 
          onStreamSelect={selectedStream => this.setState({selectedStream})} 
        streams={this.state.streams} 
        />

        <StreamView stream={this.state.selectedStream}/>

      </div>
    );
  }
}

export default App;
