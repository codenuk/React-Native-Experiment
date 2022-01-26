import React from 'react'
import { SafeAreaView, View, ActivityIndicator, Image } from 'react-native'
import { styleGlobal } from '../../theme'

const Loading = () => {
  return (
    <SafeAreaView style={styleGlobal.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Image
          style={{
            width: '50%',
            height: '50%',
            resizeMode: 'contain',
          }}
          source={require('../../../assets/icon.png')}
        />
        <ActivityIndicator />
      </View>
    </SafeAreaView>
  )
}

export default Loading
