import React from 'react'

function InformationContex(props) {


    console.log(props)



  return (
    <div style={{text:"red",marignTop:"30px"}}>{props.children}</div>
  )
}

export default InformationContex