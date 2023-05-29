import { useState } from 'react'
import Login from "./components/Login"
import SignUp from './components/Signup';
import Home from './components/Home';

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
import { theme } from './style/mui_imports'

function App() {

  const [isSignUp, setIsSignUp] = useState(true);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      {isSignUp ? <SignUp /> : <Login />}
      <ThemeProvider theme={theme}>
        <Container maxWidth="xs">
          <Box 
            sx={{
              marginTop: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button 
              onClick={toggleMode}
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3, 
                mb: 2,
                fontWeight: 700
              }}
            >
              {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
      
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;