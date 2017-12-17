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
                    <div className="stream-list container">
                        <StreamListItem
                            streams={props.streams} onStreamSelect={props.onStreamSelect}
                            stream={stream}
                            key={index}
                        />
                    </div>

                )


            })

        )
    }

}

export default StreamList