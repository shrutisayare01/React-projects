import './App.css'
import { ThemeProvider } from './ThemeContext'


function App() {

  return (
   <ThemeProvider>
    <PostsProvider>
      <AppCOntent/>
    </PostsProvider>
   </ThemeProvider>
  )
}

export default App
