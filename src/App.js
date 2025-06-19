import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from './page/home';
import About from './page/about';
import Contact from './page/contact';
import Project from './page/project';

function App() {
  return (
      <HashRouter>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
     <Route path="/project" element={<Project />}  />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  </HashRouter>
  );
}

export default App;
