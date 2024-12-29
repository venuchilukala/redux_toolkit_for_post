import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import DisplayPost from './components/displayPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <DisplayPost/>
    </>
  )
}

export default App
