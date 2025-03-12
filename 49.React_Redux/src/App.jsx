import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Product from './Components/Product'
import Nav from './Components/Nav'

function App() {
 

  return (
       <div>
       <Nav/>
          <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/product' element={<Product/>}/>
            
          </Routes>
        
       
       </div>
  )
}

export default App
