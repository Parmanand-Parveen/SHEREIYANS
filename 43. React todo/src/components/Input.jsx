import { nanoid } from 'nanoid';
import React from 'react'
import { useState } from 'react';
import css from "./Input.module.css"




function Input(props) {
   const taskdata = props.taskdata
   const settaskdata = props.settaskdata
  
  const [title, setTitle] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const data = {
      id : nanoid(),
      title,
    };
    const updatedData = [...taskdata,data]
    settaskdata(updatedData);
    localStorage.setItem("tasks", JSON.stringify(updatedData))
    setTitle("");
  };
  return (
   <div className="bg-zinc-800 w-1/2 p-3 mx-auto">
   <h1 className={css.heading}>Module Css from input field</h1>
   <form onSubmit={handleSubmit} className="bg-zinc-800 w-1/2 p-3 mx-auto flex justify-center">
   <input
   className="py-1 w-1/2"
     type=" text"
     value={title}
     onChange={(e) => {
       setTitle(e.target.value);
     }}
   />
   <button className="bg-blue-600 ml-2 px-4 py-1 rounded text-white hover:bg-blue-800 transition">Submit</button>
 </form></div>
  )
}

export default Input