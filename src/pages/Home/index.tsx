import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import { Header } from '../../navigation'
import { styleGlobal } from '../../theme'

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styleGlobal.container}>
      <Header />
      <View style={styleGlobal.wrapper}>
        <Text>Home Page</Text>
        <Button title="Go to SearchLottery" onPress={() => navigation.push('SearchLottery')} />
      </View>
    </SafeAreaView>
  )
}

export default Home
