import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function AppPage(){
    return(
        <Router>
          <nav style={{border: "1px solid #ccc", margin: "8px", padding:"6px"}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
      
    )
}
export default AppPage