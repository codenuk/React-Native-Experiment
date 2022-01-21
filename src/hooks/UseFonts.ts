import { useFonts } from 'expo-font'

const UseFonts = () => {
  const [_loaded] = useFonts({
    Kanit: require('../../assets/fonts/Kanit-Regular.ttf'),
    Neonderthaw: require('../../assets/fonts/Neonderthaw-Regular.ttf'),
  })

  return { loadedFonts: _loaded }
}

export default UseFonts
