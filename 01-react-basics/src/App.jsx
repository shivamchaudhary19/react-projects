import { useState } from 'react'
import MyFunc from './My.jsx'

function App() {
  const username = "This is Shivam Chaudhary"
  return (
    <>
    <MyFunc />
    <h1>Day 1 of react with vite | {username}</h1>
    </>
  );
}

export default App;
