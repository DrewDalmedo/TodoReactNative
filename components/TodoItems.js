import React from 'react'
import { FlatList, SafeAreaView, View, Text, Pressable } from 'react-native'

import Item from './Item'

const TodoItems = ({ todos, deleteTodo }) => {
  // render individual items through FlatList prop 'renderItem'
  const renderItem = ({ item }) => (
    <Pressable onPress={() => deleteTodo(item.id)}>
      <Item text={item.text} />
    </Pressable>
  )

  return (
    <SafeAreaView>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )

}

export default TodoItems