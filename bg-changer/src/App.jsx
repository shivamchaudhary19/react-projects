import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive")

  return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className= "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div classNmae= "flex flex-wrap justify-center gap-5 shadow-lg bg-white px-10 py-5 rounded-3xl"
          style={{backgroundColor: "white"}}>
            <button
            onClick={() => setColor("red")}
            className="outline-none m-3 px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            >Red</button>
            <button
            onClick={() => setColor("green")}
            className="outline-none m-3 px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            >Green</button>
            <button
            onClick={() => setColor("blue")}
            className="outline-none m-3 px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button
            onClick={() => setColor("yellow")}
            className="outline-none m-3 px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "yellow" , color: "black"}}
            >Yellow</button>
            <button
            onClick={() => setColor("pink")}
            className="outline-none m-3 px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "pink"}}
            >pink</button>
          </div>
        </div>
      </div>
  )
}

export default App
