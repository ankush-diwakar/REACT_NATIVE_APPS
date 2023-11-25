import { StyleSheet, Text, View ,ImageSourcePropType, Image ,TouchableOpacity, StatusBar, Vibration} from 'react-native'
import type {PropsWithChildren } from 'react';
import { trigger } from "react-native-haptic-feedback";
import React, { useState } from 'react'
import diceOne from '../assets/One.png'
import diceTwo from '../assets/Two.png'
import diceThree from '../assets/Three.png'
import diceFour from '../assets/Four.png'
import diceFive from '../assets/Five.png'
import diceSix from '../assets/Six.png'
import idle from '../assets/idlef.png'



export default function App() {



  type diceProps = PropsWithChildren<{
    imageUrl : ImageSourcePropType
  }>
  
  const [image,setImageUrl] = useState<ImageSourcePropType>(idle)
  
  const Dice = ({imageUrl} : diceProps) => {
    return(
      <View>
      <Image style={styles.imageStyles} source={image}></Image>
    </View>
    ) 
  }
  const rollTheDice = () => {
    let randomNum = Math.round(Math.random()*6)+1;
    Vibration.vibrate(50)
    switch (randomNum) {
      case 1:
        setImageUrl(diceOne)
        break;
      case 2:
        setImageUrl(diceTwo)
        break;
      case 3:
        setImageUrl(diceThree)
        break;
      case 4:
        setImageUrl(diceFour)
        break;
      case 5:
        setImageUrl(diceFive)
        break;
      case 6:
        setImageUrl(diceSix)
        break;    
      default:
        setImageUrl(idle)
        break;
    }
  }
  const resetTheState = () => {
    Vibration.vibrate(50)
    setImageUrl(idle)
  }

 

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#e4c1f9'}></StatusBar>
      <View style={styles.dynamicImg}>
        <Dice imageUrl={image}></Dice>
      </View>

      <TouchableOpacity onPress={()=>{
            rollTheDice();
        }}>
          <View style={styles.Btncontainer}>
            <Text style={styles.btn}>Roll a dice</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={()=>{
            resetTheState()
          }}
        >
          <View style={[styles.Btncontainer]}>
            <Text style={styles.btn}>reset</Text>
          </View>
        </TouchableOpacity>
        
    </View>
  )
}

const styles = StyleSheet.create({

  imageStyles:{
    width:200,
    height:200
  },
  dynamicImg:{
    margin:10
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor : '#ffffff',
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