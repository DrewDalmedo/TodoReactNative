import React from 'react'
import { View } from 'react-native'


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

const Item = props => {
  <View>
    <Text>{props.title}</Text>
  </View>
}

const TodoItems = () => {

}

export default TodoItems