import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
     <NavLink to={"/"}>Home</NavLink>
     <NavLink to={"/product"}>Product</NavLink>
    </div>
  )
}

export default Nav