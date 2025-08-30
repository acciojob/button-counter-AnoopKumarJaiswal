
import React from "react";
import './../styles/App.css';
import {useState} from "React"

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    <Clicked />
    </div>
  )
}

function Clicked() {
  const[val,setVal] = useState(0)

  return(
    <div>
    <p>Button clicked {val} times</p>
    <button  onClick(() => setVal(val+1)>Click me</button>
    </div>
  )
}

export default App
