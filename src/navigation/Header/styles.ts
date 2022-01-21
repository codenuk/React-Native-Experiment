import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  btn: {
    width: '27%',
  },
  text: {
    color: colors.black,
    fontSize: fonts.size.font14,
    fontWeight: fonts.weight.semi,
    textAlign: 'center',
  },
  textHighlight: {
    color: colors.pink,
    fontSize: fonts.size.font16,
    fontWeight: fonts.weight.bold,
  },
})

export default styles
