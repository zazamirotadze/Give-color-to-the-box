import React, { useState } from "react"
function App() {
  const [getInput, setGetInput] = useState("")
  const handleClick = (event) => {
    setGetInput(event.target.value)
  }

  const colorChanger = {
    backgroundColor:getInput
  }

  return (
    <div className="App">
      <div className="box-div" style={colorChanger} >{getInput?<h1>{getInput}</h1>:<h1>Empty Value</h1>}</div>
      <input 
        autoFocus
        placeholder="Add color element"
        onChange={(event)=>handleClick(event)}
      />
    </div>
  );
}

export default App;
