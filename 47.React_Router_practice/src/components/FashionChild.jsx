import React from 'react'
import { useParams } from 'react-router'

function FashionChild() {
    const params = useParams()
  return (
    <div>
     <h1>FashionChild</h1>
    
        <h1 className="text-red-600 text-3xl font-semibold">{params.id.toUpperCase()}</h1>
        
    </div>
  )
}

export default FashionChild