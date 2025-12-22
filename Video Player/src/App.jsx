import { useState } from 'react'
import './App.css'
import VideoPlayer from './VideoPlayer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <VideoPlayer />
    </div>
    </>
  )
}

export default App
