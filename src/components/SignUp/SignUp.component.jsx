import React, { useState } from 'react';
import { auth } from '../../configs/firebase.config.js';
// import {useForm} from "react-hook-form"

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  // const [err, setErr] = useState

  const handleSignUp = e => {
    e.preventDefault();

    if(!email){
      document.getElementById('email').innerText = "Please enter email"
    }


    if (password === passwordConfirmation) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(user => console.log(user))
        .catch(err => alert(err));
    } else {
      alert('Password do not match');
    }
  };

  return (
    <div className="sign-up container center">
      <h1>Sign Up page</h1>
      <form>
      <div className="row">
      <div className="input-field col s12 offset-m3 m6" >

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        </div>
        

        <div className="input-field col s12 offset-m3 m6" >
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        </div>
        <div className="input-field col s12 offset-m3 m6" >
        <input
          type="password"
          placeholder="Password Confirmation"
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
        />
        </div>

        <div className ="col s12 offset-m3 m6">
        <button onClick={handleSignUp} className="btn pink lighten-1 z-depth-0" style={{width:"100%"}}>Sign Up</button>
        </div>
      </div>
      </form>

    </div>
  );
};

export default SignUp;
