import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Roadmap from "./components/Roadmap/Roadmap";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import Contact from "./components/About/Contact";
import './App.css'
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Roadmap/>
    <Skills/>
    <Project/>
    <Contact/>
    </>
  );
}

export default App;
