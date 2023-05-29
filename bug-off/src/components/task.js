// template for what task would look like
import React from 'react'

export default function Task({completed, doneBy, from, text, xp, id}) {
  return (
    <li key={id}>
        <p>Task from: {from}</p>
        <p>{text}</p>
        <p>earn {xp}!</p>
    </li>
  )
}
