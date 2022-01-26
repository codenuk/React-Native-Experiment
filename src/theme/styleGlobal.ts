import { StyleSheet, StatusBar, Platform } from 'react-native'
import mediaScreen from './mediaScreen'

console.log('mediaScreen', mediaScreen)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: mediaScreen(10, 10, 30, 30),
    flex: 1,
  },
})

export default styles
