import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SportistaLogin from "./pages/sportista-login";

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sportista-login" element={<SportistaLogin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
