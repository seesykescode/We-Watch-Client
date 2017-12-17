import React from 'react'

const StreamListItem = ({streams, stream, onStreamSelect}) => {
     if (streams === null){
        return (
            null
        )
    } else {
        return(
                <div className="list-item-container" onClick={() => onStreamSelect(stream)} >
                    <h1>{stream.channel.display_name}</h1>
                    <h3>{stream.channel.game}</h3>
                    <h4>{stream.channel.status}</h4>
                </div>
  
        )
    }
   
}

export default StreamListItem