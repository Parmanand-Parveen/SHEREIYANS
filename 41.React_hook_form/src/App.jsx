import { useState } from 'react'
import {useForm} from "react-hook-form"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const {register,handleSubmit,watch,formState:{errors}}= useForm()
  const submitHandler = (data)=>{
    console.log(data)
  }
  return (
   <>
   <form action="" onSubmit={handleSubmit(submitHandler)}>
    <input placeholder='Enter your name' type="text"  {...register("name",{required:true})} /> 
    <br />
    {errors.name && <span>This field is required</span>}
    <br />
    <input type="email" placeholder='Enter your email' {...register("email")} />
    <br />
    <button>Submit</button>
   </form>
   </>
  )
}

export default App
