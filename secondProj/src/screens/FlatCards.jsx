import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <View style={styles.container}>
      
            <View style={[styles.card,styles.cardOne]}><Text style={styles.headingText}>RED</Text></View>
            <View style={[styles.card,styles.cardTwo]}><Text style={styles.headingText}>YELLOW</Text></View>
            <View style={[styles.card,styles.cardThree]}><Text style={styles.headingText}>PINK</Text></View>

            <View style={[styles.card,styles.cardTwo]}><Text style={styles.headingText}>YELLOW</Text></View>
            <View style={[styles.card,styles.cardTwo]}><Text style={styles.headingText}>YELLOW</Text></View>
            
            
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',

    },
    card : {
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10,
        fontSize : 30,
        width : 100,
        margin:10,
        height : 100,
        
    },
    headingText: {
        fontSize: 10,
        color:'#ffffff',
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    cardOne :{
        backgroundColor : '#023047',//blue
    
    },
    cardTwo :{
        backgroundColor : '#ffb703',
     
    },
    cardThree :{
        backgroundColor : '#ffc8dd' 
    }
})