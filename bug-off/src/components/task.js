// template for what task would look like
import React from 'react'

export default function task({text, user, xp}) {
  return (
    <div>
        <h1>Task from: {user}</h1>
        <p>{text}</p>
        <p>earn {xp}!</p>
    </div>
  )
}
