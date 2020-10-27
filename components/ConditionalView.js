import React from 'react'

import { Platform, View, SafeAreaView } from 'react-native'

const ConditionalView = (props) => {
  // conditionally render SafeAreaView or View depending on platform
  // if the platform is ios
  if (Platform.OS === 'ios') {
    return (
      <SafeAreaView>
        {props.children}
      </SafeAreaView>
    );
  }
  // else
  return (
    <View>
      {props.children}
    </View>
  );
}

export default ConditionalView;
