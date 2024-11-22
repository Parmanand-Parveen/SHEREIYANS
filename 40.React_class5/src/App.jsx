import { useState } from 'react'

import './App.css'

function App() {
 
   const [gender, setgender] = useState("Male")
   const [city, setCity] = useState("")
    
   const submitHandler =( e)=>{
     e.preventDefault()
     console.log(gender,city)
     setCity("")
     setgender("Male")
   }

  return (
   <>
   <form action="" onSubmit={submitHandler}>
      <input type="radio" 
       value="Male"
      onChange={(e) => setgender(e.target.value)}
      checked={gender == "Male"? true : false}
      />Male

      <input type="radio" 
       value="Female"
      onChange={(e) => setgender(e.target.value)}
      checked={gender == "Female"? true : false}
      />Female
      

     <select name="" id="" value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">City</option>
        <option value="bhopal">Bhopal</option>
        <option value="indore">Indore</option>
        <option value="sagar">Sagar</option>
        <option value="ujjain">Ujjain</option>
      
      </select>
   
   <button>Submit</button>
   
   </form>
   </>
  )
}

export default App
