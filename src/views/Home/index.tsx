import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const History = ({ navigation }: any) => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button
      title='Go To details'
      onPress={() => navigation.navigate('Details')}
    />
  </View>
)

export default History

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
