import React from 'react'
import { View, Text } from 'react-native'
// import { changeCount } from './actions'
// import { connect } from 'react-redux'

import Card from '../../components/Card'
import Styles from './styles'
import Button from '../../components/Button'
const { Container } = Styles
// const Congrats = ({ count, actions }) => {
const Congrats = ({navigation}:any) => (
  <View style={Container}>
    <Card
      info='Consequat velit qui adipisicing sunt do reprehenderit ad laborum
          tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate
          duis sit esse aliqua esse ex dolore esse. Consequat velit qui
          adipisicing sunt.'
      title='ORDEN EN CAMINO!'
      actions={[
        {
          title: 'OK',
          isPrimary: true,
          handlePress: () => navigation.navigate('Menu'),
        },
        {
          title: 'Salir',
          isPrimary: false,
          handlePress: () =>  navigation.navigate('History'),
        },
      ]}
    />
  </View>
)

// const mapStateToProps = (state: any) => ({
//   count: state.count.count,
// })

// const mapDispatchToProps = (dispatch: Function) => ({
//   actions: (n: number) => dispatch(changeCount(n)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Congrats)
export default Congrats
