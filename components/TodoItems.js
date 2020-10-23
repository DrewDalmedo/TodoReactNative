import React from 'react'
import { FlatList, SafeAreaView, View, Text } from 'react-native'

const Item = ({ text }) => ( 
  <View>
    <Text>{text}</Text>
  </View>
)

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
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )

}

export default TodoItems