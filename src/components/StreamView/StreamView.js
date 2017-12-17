 import React from 'react'
 import './StreamView.css'


 const StreamView = (props) => {
     console.log(props)
     let view = null
      props.stream === null ? view = null : view = "stream" 

       return(
          <h1>{view}</h1>

       )
        
 }

 export default StreamView