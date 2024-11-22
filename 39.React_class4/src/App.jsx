import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  console.log(username,password)
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(username,password)
  }

  return (
  <>
     <form onSubmit={submitHandler}>
     <input type="text" placeholder='Username'  value={username}  onChange={(e) => setUsername(e.target.value)}/>
     <br />
     <input type="text" placeholder='Password'  value={password}  onChange={(e) => setPassword (e.target.value)} />
     <br />
     <input type="submit" value="Login" />
     
     </form>
  
  </>
  )
}

export default App
