import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Projects from "./pages/Projects";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="projects" element={<Projects/>} />
    </Routes>
     
    </>
  );
}

export default App;
