import React from 'react'
import { Link, Outlet } from 'react-router'

function Fashion() {
  return (
    <div>
      <div className='flex gap-3'>
      <Link to={"/fashion/top"} >Top</Link>
      <Link to={"/fashion/jeans"}>Jeans</Link>
      <Link to={"/fashion/lower"}>Lower</Link>
      <Link to={"/fashion/t-shirt"}>T-shirt</Link> </div>
      
      <Outlet/>
    </div>
  )
}

export default Fashion