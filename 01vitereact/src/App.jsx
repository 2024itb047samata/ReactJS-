import { useState } from 'react'
import Sammy from "./sammy"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sammy/> {/*Used as a component */}
    <h2>My name is Sammy!</h2>
    <p>The world hates me</p>
    </>
  )
}

export default App
