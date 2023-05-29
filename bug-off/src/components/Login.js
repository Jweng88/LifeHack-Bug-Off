import { useEffect, useState } from 'react'
import useFirebaseConfig from "../firebase/useFirebaseConfig"
import { ...Avatar, , button, }
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from "firebase/auth";

export default function Login() {
    const  { app, analytics, db } = useFirebaseConfig(); 

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
  
    const defaultTheme = createTheme();
    
    return (
    <div className ="LoginForm">
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
        <Button onClick={addData}>Log In</Button>
        <Button onClick={handleLogout}>Log out</Button>
    </div>
    );
}
