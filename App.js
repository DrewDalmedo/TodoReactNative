import React from 'react'
import { useState } from 'react'
import { View } from 'react-native'

import TodoItems from './components/TodoItems'
import EntryForm from './components/EntryForm'

const App = () => {
  // todo object format:
  /* 
    {
      id: (0, 1, 2...),
      text: "text here"
    }
  */
  // function state using hooks
  // list of objects
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
  )

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        // if there's no todos, set the id to 0. otherwise increment the id by 1
        id: todos[0] === undefined ? '0' : `${parseInt(todos[todos.length-1].id) + 1}`,
        text: todo
      }
    ])
  }

  const deleteTodo = (deletionId) => {
    setTodos([
      ...todos.filter( todo => todo.id !== deletionId)
    ])
  }

  return (
    <View>
      <EntryForm addTodo={addTodo} />
      <TodoItems todos={todos} deleteTodo={deleteTodo} />
    </View>
  )
}

export default App