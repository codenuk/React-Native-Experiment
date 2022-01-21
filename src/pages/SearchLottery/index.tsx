import React, { useState } from 'react'
import { Text, SafeAreaView, Button, Image, View, TextInput } from 'react-native'
import { Header } from '../../navigation'
import styles from './styles'
import { styleGlobal } from '../../theme'
import { LinearGradient } from 'expo-linear-gradient'
import BannerSVG from './images/baner.svg'

const SearchLottery = ({ navigation }: any) => {
  const [digits, setDigits] = useState({
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
    digit5: '',
    digit6: '',
  })

  return (
    <SafeAreaView style={styleGlobal.container}>
      <Header />
      <View style={styleGlobal.wrapper}>
        <View style={{ maxHeight: 150 }}>
          <BannerSVG width="100%" height="100%" />
        </View>
        <LinearGradient
          style={styles.searchBox}
          colors={['#D4D8F5', '#F4D7EE']}
          start={[0, 1]}
          end={[1, 0]}
          locations={[0.14, 0.94]}
        >
          <Text>กรอกเลขลอตเตอรี่ที่ต้องการค้นหา</Text>
          <View>
            <TextInput
              style={styles.digit}
              onChangeText={(value: any) => setDigits({ ...digits, digit1: value })}
              value={digits.digit1}
              placeholder="L"
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={styles.digit}
              onChangeText={(value: any) => setDigits({ ...digits, digit2: value })}
              value={digits.digit2}
              placeholder="O"
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={styles.digit}
              onChangeText={(value: any) => setDigits({ ...digits, digit3: value })}
              value={digits.digit3}
              placeholder="T"
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={styles.digit}
              onChangeText={(value: any) => setDigits({ ...digits, digit4: value })}
              value={digits.digit4}
              placeholder="T"
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={styles.digit}
              onChangeText={(value: any) => setDigits({ ...digits, digit5: value })}
              value={digits.digit5}
              placeholder="E"
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={styles.digit}
              onChangeText={(value: any) => setDigits({ ...digits, digit6: value })}
              value={digits.digit6}
              placeholder="E"
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
        </LinearGradient>

        <View>
          <Button title="Go to Home" onPress={() => navigation.push('Home')} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchLottery
