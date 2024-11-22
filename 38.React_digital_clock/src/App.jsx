import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fragment } from 'react'

function App() {
  const [time, settime ] = useState(new Date().toLocaleTimeString())

  setInterval(() => {
    settime(new Date().toLocaleTimeString())
  }, 1000)

  return (
  <Fragment>
   <p className="time">{time}</p>
   <h1>{new Date().toDateString()}</h1>
  </Fragment>
  )
}

export default App
