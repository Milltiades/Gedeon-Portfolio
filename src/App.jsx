import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Projects from "./pages/Projects";

import AboutMe from "./pages/AboutMe";



function App() {
  return (
    <>
    {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>} />
      <Route path="/aboutme" element={<AboutMe/>} />
    </Routes> */}

    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/projects" Component={Projects} />
      <Route path="/about" Component={AboutMe} />
    </Routes>
     
    </>
  );
}

export default App;
