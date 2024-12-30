import React from 'react'
import { useNavigate } from 'react-router-dom'

function PNF() {

  const navigate =   useNavigate()
  return (
    <div>
    <h1>Page not found</h1>
     <button className='px-5 py-2 bg-red-500 text-white rounded' onClick={()=>{navigate(-1)}}>Back</button>
    </div>
  )
}

export default PNF