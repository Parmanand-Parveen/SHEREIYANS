import { useId, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {nanoid} from "nanoid"

function App() {
  const [title, setTitle] = useState("");

  const [taskdata, settaskdata] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const data = {
      id : nanoid(),
      title,
    };
    settaskdata([...taskdata,data]);
    setTitle("");
  };

  const renderTask = taskdata.map((data)=>{
    return  <h1 key={data.id} className=" bg-zinc-600 p-3 text-white mb-4 rounded-md">
          {data.title}
    </h1>
  })

  console.log(taskdata);

  return (
    <div>
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
      </form>

      <div className="bg-zinc-800 w-1/2 p-3 mx-auto">
      {renderTask}
      
        
      </div>
    </div>
  );
}

export default App;
