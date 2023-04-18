import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from './Login';
import Header from "./Header";
import Checkout from "./Checkout";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<>
            <Login />
          </>} />
          <Route path="/" element={<>
            <Header />
            <Home />
          </>} />
          <Route path="/checkout" element={<>
            <Checkout />
          </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
