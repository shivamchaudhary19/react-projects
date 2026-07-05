import { useState } from "react";

function App() {
  let [counter , setCounter] = useState(15)

  const increaseValue = () => {
    if(counter < 20){
      counter = counter + 1 ;
      console.log("Increase Value Clicked" , counter);
      setCounter(counter);
    }
  }

  const decreaseValue = () => {
    if(counter > 0){
      counter -= 1;
      console.log("Increase Value Clicked" , counter);
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>React Series</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={increaseValue}
      >Add Value</button>
      <br />
      <button
      onClick={decreaseValue}
      >Decrease Value</button>
    </>
  )
}

export default App
