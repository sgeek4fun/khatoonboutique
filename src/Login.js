import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "./firebase";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(auth => {
        history('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          history('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className="login__logo"
          src='khatoonboutique.png' 
        />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form onSubmit={signIn}>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' className='login__signInButton'>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the Khatoon Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
