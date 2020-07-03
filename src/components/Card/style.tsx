import { StyleSheet } from 'react-native'
import { White, Black, Title, RegularText, lightGray, SmallRadius } from '../../../assets/constants'

export default StyleSheet.create({
    CardContainer: {
      backgroundColor: White,
      shadowColor: Black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 350,
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderRadius: SmallRadius
    },
    CardTitle: {
        fontSize: Title,
        color: Black,
    },
    CardSection: {
        display: 'flex',
        marginBottom: 20
    },
    CardInfo: {
        fontSize: RegularText,
        color: lightGray,
        textAlign: 'center'
    },
    CardButtons: {
        width: 300,
        height: 100,
        display: 'flex',
        justifyContent: 'space-between'
    }
})
