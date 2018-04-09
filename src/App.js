import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { request } from './helper'

//import components
import StreamList from './components/StreamList/StreamList.js'
import StreamView from './components/StreamView/StreamView.js'
import Nav from './components/Nav/Nav.js'
import Loading from './components/Loading/Loading.js'



//import Component CSS files
import './App.css';
import './components/Nav/Nav.css'
import './components/StreamList/StreamList.css'
import './components/StreamListItem/StreamListItem.css'
import './components/StreamView/StreamView.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      streams: null,
      selectedStream: null,
      isLoggedIn: false,
      isLoading: true,
      isSearching: true,
      isSearchCompleted: false
    }
  }


  componentDidMount() {
    request({ url: "/user/validate" })
      .then((res) => res.data)
      .then((response) => {
        if (response.token.valid) {
          request({ url: "/user/streams" })
            .then((streams) => {
              streams = streams.data
              this.setState({
                streams,
                isLoggedIn: true, 
                isLoading: false,
                
              })

            })
        }
      })
      .catch((err) => {
        this.setState({ isLoggedIn: false })
      })

    if (!this.state.loggedIn) {
      request({ url: "/user/streams/featured" })
        .then((streams) => {
          streams = streams.data
          this.setState({
            streams,
            isLoggedIn:false,
            isLoading: false
          })
        })
        .catch((err) => {
          this.setState({ isLoggedIn: false })
        })
    }
  }
  

  handleSearchLink(){
    this.setState({isSearching: true})
  }


  


  render() {
    console.log(this.state.isloggedIn)
    return <Router>
        <div className="">
          <Nav status={this.state.isLoggedIn} />
          {this.state.isLoading ? <Loading /> : <div className="App">
              <div className="stream-view-container">
                {!this.state.selectedStream ? (
                  <h1 className="utl-abso-center">
                    Please select a stream{" "}
                  </h1>
                ) : (
                  <StreamView stream={this.state.selectedStream} />
                )}
              </div>

              <div className="stream-list-container">
                <div className="streamer-list">
                  <StreamList onStreamSelect={selectedStream => this.setState(
                        { selectedStream }
                      )} streams={this.state.streams} />
                </div>
              </div>
            </div>}
        </div>
      </Router>;
  }
}

export default App;
