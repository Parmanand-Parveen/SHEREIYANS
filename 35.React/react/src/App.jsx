import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Fragment>
    {import.meta.env.VITE_CHAT_GPT_KEY}
     <p> Yaha pe key ko ccess kiya hai  </p>
   </Fragment>
  )
}

export default App
