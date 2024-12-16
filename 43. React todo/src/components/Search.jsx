import React, { useState } from 'react'

function Search() {

  const [search, setSearch] = useState("")

  const handleSearch  = ()=>{
    console.log(search)
  }

  return (
    <form onSubmit={handleSearch} className="bg-zinc-800 w-1/2 p-3 mx-auto flex justify-center">
     <input
     className="py-1 w-1/2"
       type=" text"
    
       onChange={(e) => {
         setSearch(e.target.value);
       }}
     />
     <button className="bg-blue-600 ml-2 px-4 py-1 rounded text-white hover:bg-blue-800 transition">Search</button>
   </form>
  )
}

export default Search