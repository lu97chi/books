import { StyleSheet } from 'react-native'
import { BigRadius, MediumPadding, borderColor, backgroundGray  } from '../../../assets/constants'

export default StyleSheet.create({
    SearchContainer: {
        backgroundColor: backgroundGray,
        borderRadius: BigRadius,
        paddingHorizontal: MediumPadding,
        paddingVertical: 8,
        borderColor: borderColor,
        borderWidth: 1
    }
})