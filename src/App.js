import './App.css';
import React from 'react';
import Header from './components/Header'
import Cart from './pages/Cart'
import Photos from './pages/Photos'
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
        <Header />
        <h1>Home Page</h1>
        <Routes>
            <Route exact path="/" element={<Photos/>} />
            <Route path="/Cart" element={<Cart/>} />
        </Routes>
    </div>
  );
}

export default App;
