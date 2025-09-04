import { View, Text, StyleSheet, Button } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Exercicio2 = () => {


    const [contador, setcontador] = useState(0)

    function incrementar() {
      setcontador(contador+1)
    }

    function decrementar() {
      setcontador(contador-1)
    }

  return (
    <View style={styles.container}>
      <Button title="incrementar" onPress={incrementar}/>
      <Button title="decrementar" onPress={decrementar}/>


      <Text>O contador está em {contador}</Text>
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

export default Exercicio2