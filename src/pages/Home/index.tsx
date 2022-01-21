import React from 'react'
import { View, Text, SafeAreaView, Button, TouchableOpacity } from 'react-native'
import { Header } from '../../navigation'
import { styleGlobal } from '../../theme'
import { useTranslation } from 'react-i18next'

const Home = ({ navigation }: any) => {
  const { i18n, t } = useTranslation()

  return (
    <SafeAreaView style={styleGlobal.container}>
      <Header />
      <View style={styleGlobal.wrapper}>
        <Text>Home Page {t('Hello')}</Text>
        <TouchableOpacity
          onPress={() => i18n.changeLanguage('en')} //Here I change the language to "en" English
        >
          <Text>EN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => i18n.changeLanguage('th')} //Here I change the language to "en" Thai
        >
          <Text>TH</Text>
        </TouchableOpacity>

        <Button title="Go to SearchLottery" onPress={() => navigation.push('SearchLottery')} />
      </View>
    </SafeAreaView>
  )
}

export default Home
