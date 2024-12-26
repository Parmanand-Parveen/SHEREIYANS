import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Grocery from './components/Grocery'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router'
import Fashion from './components/Fashion'
import GroceryClild from './components/GroceryClild'
import Mobiles from './components/Mobiles'
import FashionChild from './components/FashionChild'
import MobilesChild from './components/MobilesChild'

function App() {
  return (
    <div className="w-[80%] mx-auto mt-10 p-10 rounded bg-zinc-200">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grocery" element={<Grocery />} >
          <Route path="/grocery/:id" element={<GroceryClild />} />
        </Route>
        <Route path='/fashion' element={<Fashion/>} >
        <Route path="/fashion/:id" element={<FashionChild />} />
        </Route>
        <Route path='/mobile' element={<Mobiles/>} >
        <Route path="/mobile/:id" element={<MobilesChild />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
