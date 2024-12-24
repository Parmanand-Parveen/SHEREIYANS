import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    
    const params =useParams()
    
  return (
    <div >ProductDetails  <span className='text-red-600 text-3xl font-semibold'>{params.id}</span></div>
  )
}

export default ProductDetails