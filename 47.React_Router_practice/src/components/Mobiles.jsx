import React from 'react'
import { Link, Outlet } from 'react-router'

function Mobiles() {
  return (
    <div>
      <div className='flex gap-3'>
      <Link to={"/mobile/oppo"} >Oppo</Link>
      <Link to={"/mobile/vivo"}>Vivo</Link>
      <Link to={"/mobile/apple"}>Apple</Link>
      <Link to={"/mobile/moto"}>Moto</Link> </div>
      
      <Outlet/>
    </div>
  )
}

export default Mobiles