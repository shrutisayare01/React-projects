import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Todos from "./Components/Todos";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
