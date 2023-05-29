import React, { useState } from 'react';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleSignUp = async(e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
  
      // Additional actions after successful user creation
      // For example, you can display a success message, redirect the user, etc.
  
      console.log('User created:', user);
    } catch (error) {
      // Handle signup errors
      console.log('Signup error:', error.message);
    }
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