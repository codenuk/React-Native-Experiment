import { StyleSheet } from 'react-native'
import { colors, fonts, mediaScreen } from '../../theme'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  btn: {
    width: '27%',
  },
  text: {
    color: colors.black,
    fontSize: mediaScreen(fonts.size.font18, fonts.size.font18, fonts.size.font14, fonts.size.font14),
    fontWeight: fonts.weight.semi,
    textAlign: 'center',
  },
  textHighlight: {
    color: colors.pink,
    fontSize: mediaScreen(fonts.size.font20, fonts.size.font20, fonts.size.font16, fonts.size.font16),
    fontWeight: fonts.weight.bold,
  },
})

export default styles
