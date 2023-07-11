import logo from './logo.svg';
import './App.css';
import { styled } from "styled-components";
import {Routes, Route, Link, useNavigate } from 'react-router-dom';
import SayWord from './components/SayWord';
import SayDecoration from './components/SayDecoration';
import { useState } from 'react';


function App() {

  return (
    <div className="App">
      <h1>Routing Practice</h1>
      <hr></hr>

      <Routes>
        <Route path="/home" element={<h2>Welcome</h2>}></Route>
        <Route path='/say/:word' element={<SayWord />}></Route>
        <Route path='/say/:word/:textColor/:backColor' element={<SayDecoration/>}></Route>

      </Routes>

    </div>
  );
}

export default App;
