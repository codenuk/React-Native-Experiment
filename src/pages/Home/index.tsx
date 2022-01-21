import React from 'react'
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native'
import { Header } from '../../navigation'

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Header />
      <Text>Home Page</Text>
      <Button title="Go to SearchLottery" onPress={() => navigation.push('SearchLottery')} />
    </SafeAreaView>
  )
}

export default Home
