import React from 'react'
import { FlatList, SafeAreaView, View, Text } from 'react-native'


const TEST_DATA = [
  {
    id: '0',
    title: 'First test item'
  },
  {
    id: '1',
    title: 'Second test item'
  },
  {
    id: '2',
    title: 'Third test item'
  }
]

const Item = ({ title }) => ( 
  <View>
    <Text>{title}</Text>
  </View>
)

const TodoItems = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
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