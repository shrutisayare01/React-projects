import './App.css'
import { ThemeProvider,useTheme } from './ThemeContext';
import {PostsProvider,usePosts} from './PostContext';
import PostItem from './PostItem';

const AppContent=()=>{
  const{theme,toggleTheme}=useTheme();
  const{posts,loading}=usePosts();
  const appStyle={
    backgroundColor:"red"
  }
  return(
    <div>
      <p>content</p>
    </div>
  )
}


function App() {

  return (
   <ThemeProvider>
    <PostsProvider>
      <AppContent/>
    </PostsProvider>
   </ThemeProvider>
  )
}

export default App
