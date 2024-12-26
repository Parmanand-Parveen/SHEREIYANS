import React from 'react'
import { useParams } from 'react-router'

function GroceryClild() {

    const params = useParams()
  return (
    <div>
     <h1>GroceryClild</h1>
    
        <h1 className="text-red-600 text-3xl font-semibold">{params.id.toUpperCase()}</h1>
        
    </div>
  )
}

export default GroceryClild