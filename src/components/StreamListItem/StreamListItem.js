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
                </div>
  
        )
    }
   
}

export default StreamListItem