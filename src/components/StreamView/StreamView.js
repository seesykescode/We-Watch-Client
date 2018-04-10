import React, { Component } from 'react'
import Loading from '../Loading/Loading'


class StreamView extends Component{
    constructor(props){
        super(props)
        this.state = {
            channel: this.props.stream.channel.display_name
        }
    }

       
    componentWillReceiveProps(nextProps, nextState){
        this.setState({channel: nextProps.stream.channel.display_name}) 
    }

   
    render(){
        return(
            <div className='twitchWrapper'>
                     <div className='twitchStream'>
                    <iframe 
                    src={`https://player.twitch.tv/?channel=${this.state.channel}`} 
                    frameborder="0" 
                    scrolling="no">
                    </iframe>
                </div>
                <div className='twitchChat'>
                    <iframe 
                    frameborder="0" 
                    scrolling="no" 
                    src={`https://www.twitch.tv/${this.state.channel}/chat`}>
                    </iframe>
                </div> 
            </div>
        )
    }
}

export default StreamView