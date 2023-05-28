import { useEffect, useState } from 'react'
import useFirebaseConfig from "./useFirebaseConfig"
import './App.css';


import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";


function App() {
  const  { app, analytics } = useFirebaseConfig(); 

  const auth = getAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputs = (event) => {
    const inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };

  const addData = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log("Login error:", error);
      });
      console.log(`${data.email} ${data.password}`)
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.log("Logout error:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);


  return (
    <div className ="App-header">
      <div className="input-fields"> 
        <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={event => handleInputs(event)}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          className="input-fields"
          onChange={event => handleInputs(event)}
        />
      </div>
  <button onClick={addData}>Log In</button>
  <button onClick={handleLogout}>Log out</button>
</div>
  );
}

export default App;
