import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import Congrats from './src/views/Congratulation'
import History from './src/views/History'
import Menu from './src/views/Menu'
import Home from './src/views/Home'
import FoodDetails from './src/views/FoodDetails'
import { GreenPrimary, White, backgroundGray } from './assets/constants'
import { View, TouchableOpacity } from 'react-native'

const Stack = createStackNavigator()

const HeaderOptions = (navigation: any): any => ({
  headerStyle: {
    backgroundColor: GreenPrimary,
  },
  headerTintColor: White,
  headerTitleAlign: 'center',
  headerRight: () => (
    <TouchableOpacity
      style={{ paddingRight: 20 }}
      onPress={() => navigation.navigate('Home')}
    >
      <AntDesign name='shoppingcart' size={24} color={backgroundGray} />
    </TouchableOpacity>
  ),
})

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Congrats'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen
        options={{ headerShown: false }}
        name='Congrats'
        component={Congrats}
      />
      <Stack.Screen name='History' component={History} />
      <Stack.Screen
        options={({ navigation }) => HeaderOptions(navigation)}
        name='Menu'
        component={Menu}
      />
      <Stack.Screen
        options={({ navigation }) => HeaderOptions(navigation)}
        name='FoodDetails'
        component={FoodDetails}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
