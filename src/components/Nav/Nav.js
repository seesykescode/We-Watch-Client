import React, { Component } from "react";
import { request } from "../../helper";
import "font-awesome/css/font-awesome.min.css";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedIn: this.props.status,
      user: null
    };
  }

  componentDidMount() {
    request({ url: "/user/validate" })
      .then(res => res.data)
      .then(response => {
        if (response.token.valid) {
          request({ url: "/user/" }).then(user => {
            user = user.data._json;
            let userObj = {
              userName: user.display_name,
              avatar: user.logo
            };
            this.setState({
              user: userObj
            });
          });
        }
      })
      .catch(err => {
        this.setState({ user: null });
      });
  }

  render() {
    return (
      <div className="nav-container">
        {!this.props.status && this.state.user ? (
          <nav className="nav">
            <div className="nav-item-container">
              <a href="http://we-watch-twitch-server.herokuapp.com/auth/login">
                <i className="fa fa-sign-in fa-4x" aria-hidden="true" />
              </a>
              <p>Login</p>
            </div>
          </nav>
        ) : (
          <nav className="nav">
            <div className="nav-item-container">
                <img src={this.state.user.avatar} alt="" className="avatar"/>
                <p>{this.state.user.userName}</p>            
            </div>
            <div className="nav-item-container">
              <a href="http://we-watch-twitch-server.herokuapp.com/auth/logout">
                <i className="fa fa-sign-out fa-5x" aria-hidden="true" />
              </a>
                <p>Logout</p>
            </div>
          </nav>
        )}
      </div>
    );
  }
}

export default Nav;
