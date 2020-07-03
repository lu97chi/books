import { StyleSheet } from 'react-native'
import { lightGray, SmallRadius } from '../../../assets/constants'

export default StyleSheet.create({
    FoodItemContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    FoodItemCol: {
        padding: 10,
        display: 'flex', 
        flexDirection: 'column'
    },
    FoodImage: {
        width: 80,
        height: 80,
        borderRadius: SmallRadius 
    },
    FoodBottomBorder: {
        borderBottomColor: lightGray,
        borderBottomWidth: 1
    },
    FoodTitle: {
        fontWeight: "bold"
    },
    FoodPrice: {
        color: lightGray,
        alignSelf: 'flex-end'
    }
})
// https://www.65ymas.com/uploads/s1/15/43/77/bigstock-a-chalkboard-with-the-text-rea-290427892.jpeg