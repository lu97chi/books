import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import Search from '../../components/Search'
import Container from '../../components/Container'
import FoodItem from '../../components/FoodItem'
import FoodItemContainer from '../../components/FoodItemContainer'
import { filterBy } from '../../utils/helpers'

const itemsOnView = [
  {
    title: 'Tacos',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Pizza',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Hot',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Dog',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Cat',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Sushi',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Atun',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Atun2',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Atun3',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Atun4',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Atun5',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Atun6',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Atun7',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Atun8',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Atun9',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Atun11',
    description: 'Una description',
    price: '$100',
  },
  {
    title: 'Atun12',
    description: 'Una description',
    price: '$100',
  },
]

const Menu = ({navigation}: any) => {
  const [search, setSearch] = useState('')
  const [items, setItems] = useState(itemsOnView)
  useEffect(() => {
    if (search === '') {
      return setItems(itemsOnView)
    }
    return setItems(filterBy(items, 'title', search))
  }, [search])
  return (
    <View style={{flex: 1}}>
      <Container>
        <Search handleChange={(text: string) => setSearch(text)} />
        <FoodItemContainer>
          {items.map(({ title, description, price }) => (
            <FoodItem
              navigate={navigation}
              key={title}
              title={title}
              desc={description}
              price={price}
            />
          ))}
        </FoodItemContainer>
      </Container>
    </View>
  )
}

export default Menu
