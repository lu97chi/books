import { StyleSheet } from 'react-native'
import { SmallPadding, MediumPadding, BigRadius, White, GreenPrimary } from '../../../assets/constants'

export const JoinStyles = (...styles: any) => StyleSheet.flatten(styles)

export const ButtonStyles = (isPrimary: boolean = false) => StyleSheet.create({
    ButtonContainer: {
      backgroundColor: isPrimary ? GreenPrimary : White,
      paddingVertical: SmallPadding,
      paddingHorizontal: MediumPadding,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: BigRadius,
    },
    TextStyles: {
      color: isPrimary ? White : GreenPrimary,
    },
  })

// export default StyleSheet.create(ButtonStyles)