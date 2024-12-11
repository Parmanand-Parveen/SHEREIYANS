import { useId, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {nanoid} from "nanoid"

function App() {
  const [title, setTitle] = useState("");

  const [formData, setFormData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const data = {
      id : nanoid(),
      title,
    };
    setFormData([...formData,data]);
    setTitle("");
  };

  console.log(formData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type=" text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>

      <div className="form">
      {formData.map((data)=>{
        return  <h1 key={data.id} className="formData">
              {data.title}
        </h1>
      })}
      
        
      </div>
    </div>
  );
}

export default App;
