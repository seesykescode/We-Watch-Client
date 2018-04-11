import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
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
      isSearchCompleted: false,
      user: null
    }
  }


  componentDidMount() {
    //Am I logged in? or what?
    request({ url: "/user/validate" })
      .then((res) => res.data)
      .then((response) => {
        if (response.token.valid){
          console.log("user is validated...")

          //get the user information
          request({url: '/user'})
            .then(res => res.data._json)
            .then((res) =>{
              console.log(res)
              let user = {
                displayName: res.display_name,
                avatar: res.logo
              }

              // get the streams for the user
              request({url:'/user/streams'})
                .then(res => res.data)
                .then((streams) => {
                  this.setState({
                    user,
                    streams,
                    isLoggedIn: true,
                    isLoading: false
                   });
                })              
            })

        } else {
          request({url: '/user/streams/featured'})
            .then(res=>res.data)
            .then((res)=> {
              let streams = res
              this.setState({
                streams,
                isLoggedIn: false,
                isLoading: false,

              })
            })
        }
      })
    }


  handleSearchLink(){
    this.setState({isSearching: true})
  }


  


  render() {
    return <Router>
        <div className="">
          <Nav status={this.state.isLoggedIn} isLoaded={this.state.isLoading} user={this.state.user} />
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
