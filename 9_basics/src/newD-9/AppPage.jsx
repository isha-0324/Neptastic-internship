import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function AppPage(){
    return(
        <Router>
          <nav className="bg-green-700 px-14 py-8 text-white hover:bg-green-400 cursor-pointer border-2 border-gray-500 text-center text-black text-xl flex justify-between ">
            <Link to="/" className="border-2 border-black px-4 py-2 rounded">Home</Link>
            <Link to="/about" className="border-2 border-black px-4 py-2 rounded">About</Link>
            <Link to="/contact" className="border-2 border-black px-4 py-2 rounded ">Contact</Link>
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