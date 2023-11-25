import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [color, setColor] = useState('#ffffff');

  const generateRandomHexCode = (): string => {
    const randomHexCode = Math.floor(Math.random() * 16777215).toString(16);
    return `#${'0'.repeat(6 - randomHexCode.length)}${randomHexCode}`;
  };


  const resetState = () => {
    setColor('#ffffff')
  }
  const changeColor = () => {
    const newColor = generateRandomHexCode();
    setColor(newColor);
  }



  return (
    <SafeAreaView>
      
      <StatusBar backgroundColor={color}></StatusBar>
      <View style={[styles.container , {backgroundColor:color}]}>

        <TouchableOpacity onPress={()=>{
          changeColor()
        }}>
          <View style={styles.Btncontainer}>
            <Text style={styles.btn}>change color</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={()=>{
            resetState()
          }}
        >
          <View style={[styles.Btncontainer]}>
            <Text style={styles.btn}>reset</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
   
    backgroundColor : 'color',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    fontSize: 10,
    color: '#ffffff',
    textTransform: 'uppercase',
    fontWeight: '800'
  },
  Btncontainer: {
    width: 200,
    margin:10,
    height: 50,
    backgroundColor: '#22223b',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  }
})