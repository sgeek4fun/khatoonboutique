import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from './Login';
import Header from "./Header";
import Checkout from "./Checkout";
import {auth, onAuthStateChanged} from "./firebase"
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, authUser=> {
      console.log('The User is >>>>', authUser);
      
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<>
            <Login />
          </>} />
          <Route path="/checkout" element={<>
            <Checkout />
          </>} />
          <Route path="/" element={<>
            <Home />
          </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
