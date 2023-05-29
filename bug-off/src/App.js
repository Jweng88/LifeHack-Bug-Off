import { useState } from 'react'
import Login from "./components/Login"
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className ="App-header">
      { !isLoggedIn && <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  );
}

export default App;
