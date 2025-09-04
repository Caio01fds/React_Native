import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio1 = ({nome}) => {
  return (
    <View style={styles.container}>
      <Text>Olá, mundo{nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItens: 'center',
        JustifyContent: 'center',
        padding: '100',
    }
})

export default Exercicio1