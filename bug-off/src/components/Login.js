import { useEffect, useState } from 'react';
import useFirebaseConfig from "../firebase/useFirebaseConfig";
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  setDoc,
  doc 
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// MUI imports
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../style/mui_imports'


export default function Login() {
  const  { app, analytics, db } = useFirebaseConfig(); 

  // current database of users
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

      users.map((user) => {
        console.log(user);
      });
    };

    getUsers();
  }, [])
  
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

  const addData = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
  
      // Get the user ID
      const uid = userCredential.user.uid;
      console.log(uid);

      // Create a new document in the "users" collection with the user data
      await setDoc(doc(db, "users", uid), {
        // Add any additional user data fields you want to store
        level: 0,
        position: "normal"
      });
  
      setIsLoggedIn(true);
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        const uid = user.uid;

      } else {
        setIsLoggedIn(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

    
    // format taken from https://github.com/mui/material-ui/blob/v5.13.2/docs/data/material/getting-started/templates/sign-in/SignIn.js
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#29a2ed'}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box component="form" onSubmit={addData} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={event => handleInputs(event)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={event => handleInputs(event)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 3, 
                  mb: 2,
                  fontWeight: 700
                }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
}


// const handleLogout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setIsLoggedIn(false);
  //     })
  //     .catch((error) => {
  //       console.log("Logout error:", error);
  //     });
  // };