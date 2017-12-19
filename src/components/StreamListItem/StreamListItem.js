import React from 'react'


const StreamListItem = ({streams, stream, onStreamSelect}) => {
     if (streams === null){
        return (
            null
        )
    } else {
        return(
                <div className="stream-list-item-container" onClick={() => onStreamSelect(stream)}>
              
                    <img src={stream.channel.logo} alt="" className="stream-avatar"/> 

                    <div className="stream-description">
                        <h2>{stream.channel.display_name}</h2>
                        <h3>{stream.channel.game}</h3>
                        <h4>{stream.viewers} viewers watching</h4>
                        </div>
                </div>
  
        )
    }
   
}

export default StreamListItem