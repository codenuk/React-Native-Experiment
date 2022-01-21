import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'

const Header = () => {
  const [active, setActive] = useState('2')
  return (
    <View style={styles.container}>
      {menu.map(({ id, name }, index) => (
        <TouchableOpacity key={index} style={styles.btn} onPress={() => setActive(id)}>
          <Text style={id === active ? [styles.text, styles.textHighlight] : styles.text}>{name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Header

const menu = [
  {
    id: '1',
    name: 'ข้อมูลผู้ขาย',
  },
  {
    id: '2',
    name: 'LOTTEE',
  },
  {
    id: '3',
    name: 'เข้าสู่ระบบ',
  },
]
