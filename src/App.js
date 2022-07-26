import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="about">About</Link>
          <br></br>
          <Link to="contact">Contact</Link>
          <br></br>
          <Link to="projects">Projects</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
