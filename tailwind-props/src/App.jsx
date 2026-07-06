import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card.jsx'


function App() {
  let myObj = {
    username: "Shivam",
    age: 19
  }

  let newArr = [1, 2, 3, 4, 5]
  return (
    <>
     <div className="bg-red-500 text-white text-4xl p-10">
      Tailwind is Working 🚀
      </div>
      <Card username="shivam" someObj = {myObj} newArr = {newArr} button="profile"/>
      <Card username= "golu" button="myProfile"/>
      </>
  )
}

export default App;
