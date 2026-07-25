import { useState } from 'react'
import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import Buy from "./component/Buy/Buy.jsx";
import LearnMore from "./component/LearnMore/LearnMore.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Footer />
    <Home />
    </>
  )
}

export default App
