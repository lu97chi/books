import React from 'react'
import { View } from 'react-native'
import Styles from './styles'

const { ContainerStyles } = Styles

const Container = ({ children }: any) => (
  <View style={ContainerStyles}>{children}</View>
)

export default Container
