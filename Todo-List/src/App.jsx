import { useState } from 'react'
import './App.css'
import TodosList from './TodoList';

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>

      {showTodos && <TodosList />}
    </div>
  )
}

export default App
