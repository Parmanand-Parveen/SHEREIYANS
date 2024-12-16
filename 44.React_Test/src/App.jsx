import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Feedback from './component/Feedback'
import Show from './component/Show'

function App() {
  const [feedback, setFeedback] = useState(JSON.parse(localStorage.getItem("feedback"))|| [])

  return (
     <div>
     <Feedback   feedback={feedback}  setFeedback={setFeedback}/>
     <Show  feedback={feedback}/> 
     </div>
  )
}

export default App
