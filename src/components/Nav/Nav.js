import React, {Component} from 'react'
import 'font-awesome/css/font-awesome.min.css';

class Nav extends Component {

    constructor(props){
        super(props)

        this.state = {
            isloggedIn: this.props.status
        }
    }

    componentDidMount(){
        
    }


    render(){
        return(
            <nav className="nav">
                {!this.props.status ? 
                    <a href="http://we-watch-twitch-server.herokuapp.com/auth/login"><i className="fa fa-sign-in fa-3x" aria-hidden="true">SignIn</i></a> 
                : 
                    <a href="http://we-watch-twitch-server.herokuapp.com/auth/logout"><i className="fa fa-sign-out fa-3x" aria-hidden="true"></i></a> }
            </nav>
           
        )
    }
}

export default Nav