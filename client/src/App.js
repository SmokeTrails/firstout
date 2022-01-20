import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home/Home.js'
import About from './Pages/About/About.js'
import Projects from './Pages/Projects/Projects.js'
import Services from './Pages/Services/Services.js'
import Contact from './Pages/Contact/Contact.js'
import Missing from './Pages/Missing/Missing.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about-us" element={<About />}/>
        <Route path="our-projects" element={<Projects />}/>
        <Route path="our-services" element={<Services />}/>
        <Route path="contact-us" element={<Contact />}/>
        <Route path="*" element={<Missing />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
