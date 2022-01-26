import React, { useState } from 'react'
import { Text, SafeAreaView, Button, View, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native'
import { Header } from '../../navigation'
import styles from './styles'
import { styleGlobal, colors } from '../../theme'
import { LinearGradient } from 'expo-linear-gradient'
import BannerSVG from './images/baner.svg'
import LotterySVG from './images/lottery.svg'

const initialState = {
  digit1: '',
  digit2: '',
  digit3: '',
  digit4: '',
  digit5: '',
  digit6: '',
}

const SearchLottery = ({ navigation }: any) => {
  const [digits, setDigits] = useState(initialState)

  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <SafeAreaView style={styleGlobal.container}>
      <Header />
      <View style={styleGlobal.wrapper}>
        <View style={styles.bannerBox}>
          <BannerSVG width="100%" />
        </View>
        <LinearGradient
          style={styles.searchBox}
          colors={['#D4D8F5', '#F4D7EE']}
          start={[0, 1]}
          end={[1, 0]}
          locations={[0.14, 0.94]}
        >
          <Text style={styles.searchBox__text}>กรอกเลขลอตเตอรี่ที่ต้องการค้นหา</Text>
          <View style={styles.searchBox__box}>
            <View style={styles.searchBox__boxInput}>
              <TextInput
                style={styles.searchBox__digit}
                onChangeText={(value: any) => setDigits({ ...digits, digit1: value })}
                value={digits.digit1}
                placeholder="L"
                keyboardType="numeric"
                maxLength={1}
              />
              <TextInput
                style={styles.searchBox__digit}
                onChangeText={(value: any) => setDigits({ ...digits, digit2: value })}
                value={digits.digit2}
                placeholder="O"
                keyboardType="numeric"
                maxLength={1}
              />
              <TextInput
                style={styles.searchBox__digit}
                onChangeText={(value: any) => setDigits({ ...digits, digit3: value })}
                value={digits.digit3}
                placeholder="T"
                keyboardType="numeric"
                maxLength={1}
              />
              <TextInput
                style={styles.searchBox__digit}
                onChangeText={(value: any) => setDigits({ ...digits, digit4: value })}
                value={digits.digit4}
                placeholder="T"
                keyboardType="numeric"
                maxLength={1}
              />
              <TextInput
                style={styles.searchBox__digit}
                onChangeText={(value: any) => setDigits({ ...digits, digit5: value })}
                value={digits.digit5}
                placeholder="E"
                keyboardType="numeric"
                maxLength={1}
              />
              <TextInput
                style={{ ...styles.searchBox__digit, marginRight: 0 }}
                onChangeText={(value: any) => setDigits({ ...digits, digit6: value })}
                value={digits.digit6}
                placeholder="E"
                keyboardType="numeric"
                maxLength={1}
              />
            </View>
            <View style={styles.searchBox__grpButton}>
              <TouchableOpacity style={styles.searchBox__clearButton} onPress={() => setDigits(initialState)}>
                <Text style={styles.searchBox__clearText}>ลบตัวเลข</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.searchBox__searchButton} onPress={() => console.log('submit')}>
                <Text style={styles.searchBox__searchText}>ค้นหาลอตเตอรี่</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.searchBox__grpFilter}>
              <TouchableOpacity
                style={[styles.searchBox__grpFilter__button, styles.searchBox__grpFilter__button_ative]}
                onPress={() => console.log('click')}
              >
                <Text style={[styles.searchBox__grpFilter__text, styles.searchBox__grpFilter__text_ative]}>
                  ทั้งหมด
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.searchBox__grpFilter__button} onPress={() => console.log('click')}>
                <Text style={styles.searchBox__grpFilter__text}>ใบเดี่ยว</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.searchBox__grpFilter__button} onPress={() => console.log('click')}>
                <Text style={styles.searchBox__grpFilter__text}>เลขชุด</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.filterSize}>
          <Text style={styles.searchBox__text}>กดเลือกลอตเตอรี่ที่ต้องการ</Text>
          <View style={styles.filterSize__boxSwitch}>
            <Text style={styles.filterSize__switch_text}>{!isEnabled ? 'ใหญ่' : 'เล็ก'}</Text>
            <Switch
              style={styles.filterSize__switch}
              trackColor={{ false: colors.white, true: '#DEE3F0' }}
              thumbColor={isEnabled ? colors.white : colors.white}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <ScrollView>
          <View style={styles.lotteryList}>
            <LotterySVG width={'50%'} />
            <LotterySVG width={'50%'} />
            <LotterySVG width={'50%'} />
            <LotterySVG width={'50%'} />
            <LotterySVG width={'50%'} />
            <LotterySVG width={'50%'} />
            <LotterySVG width={'50%'} />
            <LotterySVG width={'50%'} />
            <LotterySVG width={'50%'} />
            <LotterySVG width={'50%'} />
          </View>
        </ScrollView>

        <View>
          <Button title="Go to Home" onPress={() => navigation.push('Home')} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchLottery
