import React from 'react'
import './StreamListItem.css'

const StreamListItem = ({streams, stream, onStreamSelect}) => {
     if (streams === null){
        return (
            null
        )
    } else {
        return(
                <div className="stream-list-item-container" onClick={() => onStreamSelect(stream)} >
                    <h1>{stream.channel.display_name}</h1>
                    <h3>{stream.channel.game}</h3>
                    <h4>👀: {stream.viewers}</h4>
                <img src={stream.preview.medium} alt="" className=""/>
                </div>
  
        )
    }
   
}

export default StreamListItem