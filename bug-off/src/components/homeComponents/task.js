// template for what task would look like
import {useEffect, useState} from 'react'
import { db } from '../../firebase/useFirebaseConfig'
import { collection, getDocs, addDoc, getDoc, doc, updateDoc } from "firebase/firestore"

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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../../style/mui_imports'


export default function Task({ text, xp, id}) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const docRef = doc(db, 'tasks', id);
  const handleComplete = (e) => {
    e.preventDefault()
    const update = updateDoc(docRef, {
        "completed" : true
      })
    update()
  };
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <List
          sx={{ width: '100%', maxWidth: 1000, bgcolor: 'grey' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          key={id}
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Task:" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem sx={{ pl: 4 }}>
                <ListItemText primary={text} />
              </ListItem>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={"earn " + xp + "xp!"} />
              </ListItemButton>
            </List>
          </Collapse>
          <Button variant="contained" onSubmit={handleComplete}>completed</Button>
        </List>
      </Box>
    </ThemeProvider>
  )
}