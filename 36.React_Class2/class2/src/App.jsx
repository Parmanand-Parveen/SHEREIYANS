import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const clickHandler=(msg)=>{
    console.log(msg)
  }

  return (
   <div>
    <button onClick={()=>{clickHandler("Button clicked")}}>
     Click me 
    </button>
   </div>
  )
}

export default App
