import { useState } from 'react'
import './App.css'
import UserProfile from './UserProfile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>Props Example</h1>
      <UserProfile />
    </>
  )
}

export default App
