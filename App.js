import React from 'react'
import { useState } from 'react'

import TodoItems from './components/TodoItems'

const App = () => {
  // todo object format:
  /* 
    {
      id: (0, 1, 2...),
      text: "text here"
    }
  */
  // function state using hooks
  const [todos, setTodos] = useState( 
    [
      {
        id: '0', 
        text: "first test item"
      },
      {
        id: '1',
        text: "second test item"
      },
      {
        id: '2',
        text: "third test item"
      }
    ] 
  ) // list of objects

  return (
    <TodoItems todos={todos}/>
  )
}

export default App