import React from 'react'
import { FlatList, SafeAreaView, View, Text } from 'react-native'

import Item from './Item'

const TodoItems = ({ todos }) => {
  // render individual items through FlatList prop 'renderItem'
  const renderItem = ({ item }) => (
    <Item text={item.text} />
  )

  return (
    <SafeAreaView>
      <FlatList
        data={todos}
        renderItem={renderItem}
        //keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )

}

export default TodoItems