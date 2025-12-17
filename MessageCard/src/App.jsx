import { useState } from 'react'
import './App.css'
import MessageCard from './MessageCard'
function App() {
  const [count, setCount] = useState(0)

  return (
       <div>
      <h1>Messages</h1>

      <MessageCard
        title="Welcome"
        message="Welcome to our React application!"
      />

      <MessageCard
        title="Success"
        message="Your data has been saved successfully."
      />

      <MessageCard
        title="Warning"
        message="Please check the form inputs carefully."
      />

      <MessageCard
        title="Info"
        message="This is a reusable MessageCard component."
      />
    </div>
  )
}

export default App
