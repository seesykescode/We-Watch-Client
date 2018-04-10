import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class Nav extends Component {
  render() {
    return <div className="nav-container">
        {!this.props.status ? <nav className="nav">
            <div className="nav-item-container">
              <a href="http://we-watch-twitch-server.herokuapp.com/auth/login">
                <i className="fa fa-sign-in fa-4x" aria-hidden="true" />
              </a>
              <p>Login</p>
            </div>
          </nav> : <nav className="nav">
            <div className="nav-item-container">
              <img src={this.props.user.avatar} alt="" className="avatar" />
              <p>{this.props.user.userName}</p>
            </div>
            <div className="nav-item-container">
              <a href="http://we-watch-twitch-server.herokuapp.com/auth/logout">
                <i className="fa fa-sign-out fa-5x" aria-hidden="true" />
              </a>
              <p>Logout</p>
            </div>
          </nav>}
      </div>;
  }
}

export default Nav;
