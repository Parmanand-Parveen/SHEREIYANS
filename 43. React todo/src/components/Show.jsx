import React from 'react'
import "./Show.css"

function Show(props) {
     const taskdata = props.taskdata
     const settaskdata = props.settaskdata

     const handleDelete = (i)=>{

        const copyData = [...taskdata]
        copyData.splice(i,1)
       settaskdata(copyData)
       localStorage.setItem("tasks",JSON.stringify(copyData))

     }
    


  const renderTask = taskdata.map((data,i)=>{
    return  <h1 key={data.id} className=" bg-zinc-600 p-3 flex justify-between text-white mb-4 rounded-md">
          {data.title}
          <i className="ri-delete-bin-5-line hover:text-red-400 transition" onClick={()=>{handleDelete(i)}}></i>
    </h1>
  })

  const headCss = {
    color:"white"
  }

  return (
     <div className="bg-zinc-800 w-1/2 p-3 mx-auto">
      { /*inlinecss*/}
     <h1 style={{color:"white"}} >Inline css</h1>
       
     <h1 style={headCss} >Internal css</h1>
     {renderTask}

     <h1 className='head'>External css</h1>
     
       
     </div>
  )
}

export default Show