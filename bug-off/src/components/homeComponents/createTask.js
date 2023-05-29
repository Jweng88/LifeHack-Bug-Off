// create task and upload it to firestore
import { useState } from 'react'
import { db } from '../../firebase/useFirebaseConfig'
import { collection, addDoc } from "firebase/firestore"

export default function CreateTask() {
    const [text, setText] = useState("")
    const [title, setTitle] = useState("")
    const [xp, setXp] = useState(0)
    const taskDB = collection(db, "tasks")
    const handleSubmit = async () => {
        await addDoc (taskDB, {
        completed: false,
        doneBy: "l",
        from: "bigboss",
        text: text,
        xp: xp
    })}
    // const handleSubmit = async () => {
    //     await set(ref(db, "tasks/" + title), {
    //     completed: false,
    //     doneBy: "l",
    //     from: "bigboss",
    //     text: text,
    //     xp: xp
    // })}
  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <label>title: </label>
            <input
                className="input-title"
                type="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder=""
            />
            <label>text: </label>
            <input
                className="input-text"
                type="text"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="what is to be done?"
            />
            <label>xp: </label>
            <input
                className="input-xp"
                required
                value={xp}
                onChange={(e) => setXp(e.target.value)}
                placeholder="for how much xp?"
            />
            <button>submit</button>
        </form>
    </div>
  )
}
