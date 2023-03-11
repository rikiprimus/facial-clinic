import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import component
import Landing from "./pages/Landing";
import About from "./pages/About";
import Perawatan from "./pages/Perawatan";

import './index.css';

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* View */}
      <Route exact path="/" element={<Landing/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/perawatan" element={<Perawatan/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
