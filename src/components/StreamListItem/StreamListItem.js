import React from 'react'


const StreamListItem = ({streams, stream, onStreamSelect}) => {
    console.log(stream)
     if (streams === null){
        return (
            null
        )
    } else {
        return(
                <div className="stream-list-item-container" onClick={() => onStreamSelect(stream)}>
              
                    <img src={stream.channel.logo} alt="" className="stream-avatar"/> 

                    <div className="stream-description">
                        <h1>{stream.channel.display_name}</h1>
                        <h2>{stream.channel.game}</h2>
                        <h3>{stream.viewers} viewers watching</h3>
                        </div>
                </div>
  
        )
    }
   
}

export default StreamListItem