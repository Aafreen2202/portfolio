import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route>
              <Route path='/' element ={<Navbar/>}></Route>
              <Route index element={<Home/>}></Route>
              <Route path='skills' element={<Skills/>}></Route>
              <Route path='projects' element={<Projects/>}></Route>
              <Route path='contact' element={<Contact/>}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
