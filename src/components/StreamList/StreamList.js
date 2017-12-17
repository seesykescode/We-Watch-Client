import React from 'react'
import StreamListItem from '../StreamListItem/StreamListItem.js'
import './StreamList.css'


function StreamList(props) {
    if (props.streams === null) {
        return (
            null
        )
    } else {
        return (
            <div className="stream-list-container">
            {props.streams.map((stream, index) => {
                return (
                    
                        <StreamListItem
                            streams={props.streams} onStreamSelect={props.onStreamSelect}
                            stream={stream}
                            key={index}
                        />
                
                )
            })}
            </div>
        )
    
    }

}

export default StreamList