import { useState, useEffect } from 'react'
import TaskList from './homeComponents/taskList'
import CreateTask from './homeComponents/createTask'
import { db } from '../firebase/useFirebaseConfig'
import { collection, getDocs, addDoc, getDoc, doc } from "firebase/firestore"

// MUI imports
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../style/mui_imports'

export default function Home({ uid }) {
  const taskDB = collection(db, "tasks")
  const userRef = doc(db, "users", uid);
  const [tasks, setTasks] = useState([])
  const [position, setPostion] = useState("")
  const [xp,setXp] = useState(0)
  useEffect(() => {
      const getData = async () => {
        const data = await getDocs(taskDB)
        setTasks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
      const getUserDoc = async () => {
        const userDoc = await getDoc(userRef)
        const data = userDoc.data()
        setPostion(data.position)
        setXp(data.xp)
      };
      getUserDoc()
      getData()
  }, [])
  const createTask = async (data) => {
    await addDoc(taskDB, data)
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {position=="boss" ? 
          <Typography component="h1" variant="h4">
            Hello, Boss
          </Typography> :
          <Typography component="h1" variant="h4">
            Hello, Worker
          </Typography>
          }
          <CreateTask createTask = {createTask} uid ={uid}/>
          <TaskList tasks = {tasks}/>
          <Box>
            <Typography component="h1" variant="h5">
              your xp: {xp}
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
