import React from 'react'
import { Text, View, Image } from 'react-native'
import { Dimensions } from 'react-native'
import Styles from './style'
import { lightGray } from '../../../assets/constants'
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler'

const {
  FoodItemContainer,
  FoodItemCol,
  FoodImage,
  FoodBottomBorder,
  FoodTitle,
  FoodPrice,
} = Styles

const dimensions = Dimensions.get('window')
const imageHeight = Math.round((dimensions.width * 9) / 16)
const imageWidth = dimensions.width

type Props = {
  title: string,
  price: string,
  desc: string,
  navigate: string,
}

const FoodItem = ({ title, price, desc, navigate }: Props) => (
  <TouchableOpacity onPress={() => navigate.navigate('FoodDetails')}>
    <View style={FoodItemContainer}>
      <View style={{ ...FoodItemCol, flex: 1 }}>
        <Image
          style={FoodImage}
          source={{
            uri:
              'https://www.65ymas.com/uploads/s1/15/43/77/bigstock-a-chalkboard-with-the-text-rea-290427892.jpeg',
          }}
        />
      </View>
      <View style={{ ...FoodItemCol, ...FoodBottomBorder, flex: 2 }}>
        <Text style={FoodTitle}>{title}</Text>
        <Text>{desc}</Text>
      </View>
      <View style={{ ...FoodItemCol, ...FoodBottomBorder, flex: 1 }}>
        <Text style={FoodPrice}>{price}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

export default FoodItem
