import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import Projects from './components/projects'
import About from './components/about';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// ---
// import Header from './components/common';
// import Nav from './components/common';

// ---


let component
switch (window.location.pathname) {
  case "/":
    component = <About></About>
    break
  case "/about":
    component = <About></About>
    break
  case "/projects":
    component = <Projects></Projects>
    break
  case "/contact":
    component = <Contact></Contact>
    break
  case "/resume":
    component = <Resume></Resume>
}

{/* <div className='container'>{component}</div> */ }
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/ReactPortfolio" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/resume" element={<Resume />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
