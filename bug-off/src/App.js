import { useState } from 'react'
import Login from "./components/Login"
import SignUp from './components/Signup';

function App() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      {isSignUp ? <SignUp /> : <Login />}
      <button onClick={toggleMode}>
        {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
      </button>
    </div>
  );
}

export default App;