import { setCustomView, setCustomTextInput, setCustomText, setCustomTouchableOpacity } from 'react-native-global-props'
import { fonts } from '.'

const customTags = () => {
  const customFontFamilyProps = {
    style: {
      fontFamily: fonts.type.Kanit,
    },
  }

  setCustomView(customFontFamilyProps)
  setCustomTextInput(customFontFamilyProps)
  setCustomText(customFontFamilyProps)
  setCustomTouchableOpacity(customFontFamilyProps)
  return true
}

export default customTags
