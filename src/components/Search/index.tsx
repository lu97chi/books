import React from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Styles from './styles'

const { SearchContainer } = Styles

const Search = ({ handleChange }: any) => (
  <View>
    <TextInput
      onChangeText={(text) => handleChange(text)}
      style={SearchContainer}
      placeholder='Buscar'
    />
  </View>
)

export default Search
