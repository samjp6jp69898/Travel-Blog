import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Adventure from "./components/pages/Adventure";
import NotFound from "./components/pages/NotFound";
import Mylove from "./components/pages/mylove";
import USA from "./components/pages/usa";
import Japan from "./components/pages/japan";
import BFF from "./components/pages/bff";
import Taiwan from "./components/pages/taiwan";
import About from "./components/pages/about";
import Login from "./components/pages/login";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success",{
        method:"GET",
        credentials:"include",
        headers: {
          
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
         
        },
      }).then(response => {
        if(response.status === 200) return response.json();
        throw new Error("authentication has been failed")
      }).then(resObject => {
        setUser(resObject.user);
      }).catch((err) => {
        console.log(err);
      });
    };
    getUser();
  }, []);
 
  console.log(user);

  return (
    <div className="App">
      <Navbar user={user} />

      <Routes>
        <Route exact path="/adventure" element={<Adventure/>} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/mylove" element={<Mylove/>}/>
        <Route exact path="/usa" element={<USA/>}/>
        <Route exact path="/japan" element={<Japan/>}/>
        <Route exact path="/bff" element={<BFF/>}/>
        <Route exact path="/taiwan" element={<Taiwan/>}/>
        <Route exact path="/about" element={<About/>}/>
        {/*user ? <Navigate/> if there is user, go to navigate path
        if there is not go to the path after : */}
        <Route exact path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
