import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./Login"
import User from "./User"
import UserS from "./SignUp";
import UserDetails from "./UserDetail";
function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/> 
                <Route path="/users" element={<User/>}/>
                <Route path="/create-user" element={<UserS/>}/>  
                <Route path="/user-details" element={<UserDetails />} />
                
            </Routes>
        </Router>
    )
}
export default App

