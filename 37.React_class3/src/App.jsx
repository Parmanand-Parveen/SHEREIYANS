import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [msg, setmsg] = useState("Button not clicked");

  const clickHandler = (status) => {
    setmsg(status);
  };
  console.log(msg);

  return (
    <Fragment>
      <p>{msg}</p>
      <button onClick={() => clickHandler("Butoon clicked")}>Click me</button>
    </Fragment>
  );
}

export default App;
