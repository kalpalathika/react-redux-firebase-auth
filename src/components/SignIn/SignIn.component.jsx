import React, { useState } from 'react';
import { auth } from '../../configs/firebase.config.js';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => console.log(user))
      .catch(err => console.error(err));
  };

  return (
    <div className="sign-in container center">
      <h1>Sign in page</h1>
      <form className="white col s12">
        <div className="row">
        <div className="input-field col s12 offset-m3 m6" >
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        </div>

        <div className="input-field col s12 offset-m3 m6">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        </div>
        </div>
        <div className="input-field col s12 offset-m3 m6">
        <button onClick={handleSignIn} className="btn pink lighten-1 z-depth-0" style={{width:"50%"}}>Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
