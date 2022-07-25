import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import Projects from './components/projects'
import About from './components/about';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';

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

function App() {
  return (
    <div>
      <Header></Header>
      <div className='container'>{component}</div>
      <Footer></Footer>
    </div>
  );
}

export default App;
