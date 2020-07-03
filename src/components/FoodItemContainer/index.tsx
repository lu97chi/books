import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { View } from 'react-native'

const FoodItemContainer = ({ children }: any) => (
  <View style={{flex: 1}}>
    <ScrollView>{children}</ScrollView>
  </View>
)

export default FoodItemContainer
