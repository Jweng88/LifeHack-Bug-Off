// create task and upload it to firestore
import { useState } from 'react'

export default function CreateTask({ createTask, uid }) {
    const [text, setText] = useState("")
    const [xp, setXp] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            completed: false,
            text: text,
            xp: xp
        })
    }
  return (
    <form onSubmit={handleSubmit}>
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
        <button type="submit">submit</button>
    </form>
  )
}
