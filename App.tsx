import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home, SearchLottery } from './src/pages'

const App = () => {
  const Stack = createNativeStackNavigator()

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
