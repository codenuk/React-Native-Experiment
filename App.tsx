import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home, SearchLottery } from './src/pages'
import UseFonts from './src/hooks/UseFonts'
import customTags from './src/theme/customTags'
import './src/i18n/i18n'

const App = () => {
  customTags()
  const Stack = createNativeStackNavigator()
  const { loadedFonts }: any = UseFonts()

  if (!loadedFonts) {
    return null
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SearchLottery" component={SearchLottery} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

export default App
