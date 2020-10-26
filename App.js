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

  return (
    <View>
      <EntryForm />
      <TodoItems todos={todos}/>
    </View>
  )
}

export default App