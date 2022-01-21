import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics: any = {
  screenWidht: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export default metrics
