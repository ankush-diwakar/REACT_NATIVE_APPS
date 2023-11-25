import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.head}>ElevatedCards</Text>

      <ScrollView horizontal={true} style={styles.container}>
      <View style={[styles.card,styles.cardOne]}><Text style={styles.headingText}>RED</Text></View>
            <View style={[styles.card,styles.cardTwo]}><Text style={styles.headingText}>YELLOW</Text></View>
            <View style={[styles.card,styles.cardThree]}><Text style={styles.headingText}>PINK</Text></View>

            <View style={[styles.card,styles.cardTwo]}><Text style={styles.headingText}>YELLOW</Text></View>
            <View style={[styles.card,styles.cardOne]}><Text style={styles.headingText}>YELLOW</Text></View>

      </ScrollView>
    


    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',

    },
    head: {
        fontSize: 10,
        color:'#000000',
        fontWeight: 'bold',
        paddingTop :20,
        paddingHorizontal: 8
       
    },
    card : {
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10,
        fontSize : 30,
        width : 150,
        margin:10,
        height : 150,
        elevation:9,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#000000',
        shadowOpacity:1,
        shadowRadius:10
        
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