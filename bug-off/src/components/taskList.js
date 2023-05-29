// would display list of tasks
import React from 'react'
import Task from './task'

// i assume the tasks prop to be a an array of task obj that has the text, xp and user field
function TaskList({ tasks }) {
  return (
    <div>
        <p>available tasks</p>
        <ul>
          {tasks.map((task) => 
                <Task 
                  from = {task.from}
                  text = {task.text}
                  xp = {task.xp}
                  id = {task.id} 
                />)}
        </ul>
    </div>
  )
}

export default TaskList;