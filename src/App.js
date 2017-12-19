import React, { Component } from 'react';

import { request } from './helper'

import StreamList from './components/StreamList/StreamList.js'
import StreamView from './components/StreamView/StreamView.js'
import Nav from './components/Nav/Nav.js'


//import Component CSS files
import './App.css';
import './components/Nav/Nav.css'
import './components/StreamList/StreamList.css'
import './components/StreamListItem/StreamListItem.css'
import './components/StreamView/StreamView.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      streams: null, 
      selectedStream: null,
      isLoggedIn: null,
      channel: null
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
                streams,
                isLoggedIn: true
              })
              
            })
        }
      })
      .catch((err) => {
        console.log(err)
        this.setState({isLoggedIn: false})
      })
  
  }


  render() {
    return (
      <div className="">
        

        <div className="App">

          <div className="stream-view-container">
            {!this.state.selectedStream ? <h2>Please select a stream</h2> : <StreamView stream = {this.state.selectedStream}/>}
          </div>
          <div className="stream-list-container">
          
          <div className="streamer-list">
              <div className="nav-item-container">
                <Nav status={this.state.isLoggedIn} />
              </div>
              
              <StreamList
                onStreamSelect={selectedStream => this.setState({ selectedStream })}
                streams={this.state.streams}
              />
          </div>
            
            
            
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
