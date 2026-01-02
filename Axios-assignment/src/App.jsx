import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import TodoDetails from './pages/TodoDetails'
import TodoList from './pages/TodoList'
import './App.css'

function App() {

  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoList/>}/>
            <Route path="/todo/:id" element={<TodoDetails/>}/>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
