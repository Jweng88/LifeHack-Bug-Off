// would display list of tasks
import React from 'react'
import task from './task'

// i assume the tasks prop to be a an array of task obj that has the text, xp and user field
export default function taskList({ tasks }) {
  return (
    <div>
        <h1>available tasks</h1>
        <ul>
            {tasks.map((task) => <li key={task.user}><task props={task} /></li>)}
        </ul>
    </div>
  )
}
