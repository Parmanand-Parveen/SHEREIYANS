import { useId, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {nanoid} from "nanoid"
import Input from "./components/input";
import Show from "./components/show";
import Search from "./components/Search";

function App() {


  const [taskdata, settaskdata] = useState(JSON.parse(localStorage.getItem("tasks"))|| []);

 



  return (
    <div>

    <h1 className='head'>External css from app</h1>
    <Search taskdata={taskdata}/>
      <Input taskdata={taskdata}  settaskdata={settaskdata}/>
      
     <Show taskdata={taskdata}  settaskdata={settaskdata}/>
     
    </div>
  );
}

export default App;
