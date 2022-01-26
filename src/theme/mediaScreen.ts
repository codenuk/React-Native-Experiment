import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

function mediaScreen(
  small: string | number,
  medium: string | number,
  large: string | number,
  extra: string | number,
): any {
  if (width < 575.98) {
    // console.log('Small')
    return small
  } else if (width < 767.98) {
    // console.log('Medium')
    return medium
  } else if (width < 991.98) {
    // console.log('Large')
    return large
  } else if (width < 1199.98) {
    // console.log('Extra')
    return extra
  } else {
    return extra
  }
}

export default mediaScreen
