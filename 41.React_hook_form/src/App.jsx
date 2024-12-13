import { useState } from 'react'
import {useForm} from "react-hook-form"
import './App.css'

function App() {
  const {register,handleSubmit,formState:{errors}}= useForm(
   {
    defaultValues:{
      city:"mumbai"
    }
   }
  )
  const submitHandler = (data)=>{
   console.log(data)
  }

  return (
    <>
    <form
      className="bg-white shadow-lg rounded-lg p-6 w-1/2 mx-auto mt-10"
      action=""
      onSubmit={handleSubmit(submitHandler)}
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        User Information Form
      </h2>
  
      {/* Name Input */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-2 font-medium">
          Name
        </label>
        <input
          placeholder="Enter your name"
          type="text"
          {...register("name", { required: true })}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">
            This field is required
          </span>
        )}
      </div>
  
      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "Invalid email" })}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">
            {errors.email.message}
          </span>
        )}
      </div>
  
      {/* City Selection */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-2 font-medium">
          City
        </label>
        <select
          {...register("city")}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="bhopal">Bhopal</option>
          <option value="indore">Indore</option>
          <option value="jabalpur">Jabalpur</option>
          <option value="mumbai">Mumbai</option>
        </select>
      </div>
  
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  </>
  
  )
}

export default App
