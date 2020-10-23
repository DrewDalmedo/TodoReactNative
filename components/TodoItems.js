import React from 'react'
import { useState } from 'react'
import { FlatList, SafeAreaView, View, Text } from 'react-native'


const TEST_DATA = [
  {
    id: '0',
    text: 'First test item'
  },
  {
    id: '1',
    text: 'Second test item'
  },
  {
    id: '2',
    text: 'Third test item'
  }
]

const Item = ({ text }) => ( 
  <View>
    <Text>{text}</Text>
  </View>
)

const TodoItems = () => {
  // todo object format:
  /* 
    {
      id: (0, 1, 2...),
      text: "text here"
    }
  */
  // function state using hooks
  const [todos, setTodos] = useState( [{}] ) // list of objects

  // render individual items through FlatList prop 'renderItem'
  const renderItem = ({ item }) => (
    <Item text={item.text} />
  )

  return (
    <SafeAreaView>
      <FlatList
        data={TEST_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )

}

export default TodoItems