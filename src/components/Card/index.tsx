import React from 'react'
import { View, Text } from 'react-native'
import CardStyles from './style'
import Button from '../Button'

const {
  CardContainer,
  CardTitle,
  CardSection,
  CardButtons,
  CardInfo,
} = CardStyles

const Card = ({
  hasTitle = true,
  hasInfo = true,
  hasActions = true,
  info = '',
  title = '',
  actions = [{ title: '', isPrimary: false, handlePress: () => {} }],
}) => (
  <View style={CardContainer}>
    {hasTitle && (
      <View style={CardSection}>
        <Text style={CardTitle}>{title}</Text>
      </View>
    )}
    {hasInfo && (
      <View style={CardSection}>
        <Text style={CardInfo}>{info}</Text>
      </View>
    )}
    {hasActions && (
      <View style={CardSection}>
        <View style={CardButtons}>
          {actions.map(({ title, isPrimary, handlePress }) => (
            <Button
              key={title}
              title={title}
              isPrimary={isPrimary}
              handlePress={handlePress}
            />
          ))}
        </View>
      </View>
    )}
  </View>
)

export default Card
