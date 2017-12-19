import React from 'react'
import StreamListItem from '../StreamListItem/StreamListItem.js'



function StreamList(props) {
    if (props.streams === null) {
        return (
            null
        )
    } else {
        return (
          
            props.streams.map((stream, index) => {
                return (
                    
                      
                        <StreamListItem
                            streams={props.streams} onStreamSelect={props.onStreamSelect}
                            stream={stream}
                            key={index}
                        />
                     
                
                )

    
            })

        )
        }
}

export default StreamList