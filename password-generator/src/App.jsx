import { useEffect, useState } from 'react'
import { useCallback } from 'react'
import { useRef } from "react";
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [characterAllowed , setCharacterAllowed] = useState(false)
  const [password , setPassword]= useState("")

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!#$%&'()*+,-./:;<=>?@[\\\\]^_`{|}~";

    for (let i = 1 ; i <= length ; i++){
      let char = Math.floor(Math.random() * str.length)

      pass += str.charAt(char)

    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])
  
  const copyPasswordToClipboard =useCallback(() => {

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  } , [password])

useEffect(() =>{
  passwordGenerator()
} , [length , numberAllowed , characterAllowed , passwordGenerator])

  return (
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 bg-gray-700">
    <h1 className="text-white text-center text-2xl font-bold mb-5">
      Password Generator
    </h1>

    {/* Password + Copy */}
    <div className="flex shadow rounded-lg overflow-hidden mb-6">
      <input
        type="text"
        value={password}
        className="outline-none w-full px-3 py-2 text-black"
        placeholder="Password"
        readOnly
        ref={passwordRef}
      />

      <button
        onClick={copyPasswordToClipboard}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 shrink-0"
      >
        Copy
      </button>
    </div>

    {/* Length */}
    <div className="flex items-center gap-3 mb-5">
      <input
        type="range"
        min={6}
        max={100}
        value={length}
        className="cursor-pointer w-full"
        onChange={(e) => setLength(Number(e.target.value))}
      />

      <label className="text-white whitespace-nowrap">
        Length : {length}
      </label>
    </div>

    
    <div className="flex items-center gap-8">
      <div className="flex items-center">
        <input
          className="mr-2"
          type="checkbox"
          checked={characterAllowed}
          id="characterInput"
          onChange={() => {
            setCharacterAllowed((prev) => !prev);
          }}
        />

        <label
          htmlFor="characterInput"
          className="text-white"
        >
          Characters
        </label>
      </div>

      <div className="flex items-center">
        <input
          className="mr-2"
          type="checkbox"
          checked={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />

        <label
          htmlFor="numberInput"
          className="text-white"
        >
          Numbers
        </label>
      </div>
    </div>
  </div>
);
}

export default App
