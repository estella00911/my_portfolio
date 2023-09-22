import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Pages/Home/Navbar';
import Home from "./Pages/Home/Homescreen";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<div>404 Not Found</div>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
