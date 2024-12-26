import React from 'react'
import { Links, Outlet } from 'react-router'
import { Link } from 'react-router'

function Grocery() {
  return (
    <div>
      <div className='flex gap-3'>
      <Link to={"/grocery/soap"} >Soap</Link>
      <Link to={"/grocery/oil"}>Oil</Link>
      <Link to={"/grocery/sampoo"}>Sampoo</Link>
      <Link to={"/grocery/masala"}>Masala</Link> </div>
      
      <Outlet/>
    </div>
  )
}

export default Grocery