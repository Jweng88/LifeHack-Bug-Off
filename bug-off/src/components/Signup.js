import React, { useState } from 'react';
import { auth } from './firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful user creation
        console.log(userCredential.user);
      })
      .catch((error) => {
        // Handle user creation error
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;