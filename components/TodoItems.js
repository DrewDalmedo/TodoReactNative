import React from 'react'
import { FlatList, Pressable } from 'react-native'

import ConditionalView from './ConditionalView'

import Item from './Item'

const TodoItems = ({ todos, deleteTodo }) => {
  // render individual items through FlatList prop 'renderItem'
  const renderItem = ({ item }) => (
    // on tapping an Item, delete the associated Todo from the list
    <Pressable onPress={() => deleteTodo(item.id)}>
      <Item text={item.text} />
    </Pressable>
  )

  return (
    <ConditionalView>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ConditionalView>
  )

}

export default TodoItems;