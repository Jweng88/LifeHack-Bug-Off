import { useState, useEffect } from 'react'
import TaskList from './homeComponents/taskList'
import CreateTask from './homeComponents/createTask'
import { db } from '../firebase/useFirebaseConfig'
import { collection, getDocs } from "firebase/firestore"

export default function Home() {
    const taskDB = collection(db, "tasks")
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(taskDB)
            setTasks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getData()
    }, [])
  return (
    <div>
        <p>Hi!</p>
        <CreateTask />
        <TaskList tasks = {tasks}/>
    </div>
  )
}
