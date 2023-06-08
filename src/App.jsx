import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Projects from "./pages/Projects";

import AboutMe from "./pages/AboutMe";

import PlayMusic from "./components/PlayMusic"



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

<div className="playDiv">
    <PlayMusic/>
    </div>
     
    </>
  );
}

export default App;
