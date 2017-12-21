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
            <div className="nav-container">
                {!this.props.status ? 
                    <nav className="nav">
                        <div className="nav-item-container">
                            <a href="http://we-watch-twitch-server.herokuapp.com/auth/login"><i className="fa fa-sign-in fa-3x" aria-hidden="true"></i></a>
                            <p>Log-in</p>
                        </div> 
                    </nav>
                : 
                  <nav className="nav">
                        <div className="nav-item-container">
                            <a href="http://we-watch-twitch-server.herokuapp.com/auth/logout"><i className="fa fa-sign-out fa-3x" aria-hidden="true"></i></a>
                            <p>Logout</p>
                        </div>


                       
                  </nav>

                }

                

            </div>
           
        )
    }
}

export default Nav