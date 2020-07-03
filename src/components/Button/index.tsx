import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, View } from 'react-native'

import { ButtonStyles, JoinStyles } from './style'

const Button = ({ handlePress = () => {}, title = '', isPrimary = false }) => (
  <TouchableOpacity
    style={ButtonStyles(isPrimary).ButtonContainer}
    onPress={() => handlePress()}
  >
      <Text style={ButtonStyles(isPrimary).TextStyles}>{title}</Text>
  </TouchableOpacity>
)

export default Button
