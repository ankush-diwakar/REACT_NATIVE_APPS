import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './src/screens/FlatCards'
import ElevatedCards from './src/screens/ElevatedCards'
import FancyCards from './src/screens/FancyCards'
import ActionCards from './src/screens/ActionCards'
import ContactList from './src/screens/ContactList'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>


        <View style={styles.mainContainer}>

          <Text style={styles.headingText}>App</Text>


          <FlatCards></FlatCards>
          <ElevatedCards></ElevatedCards>
          <FancyCards></FancyCards>
          <ScrollView horizontal={true} >
            <ActionCards></ActionCards>
            <ActionCards></ActionCards>
            <ActionCards></ActionCards>
          </ScrollView>
          <ContactList></ContactList>

        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fefae0'
  },
  textStyle: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 10,
    color: '#000000'
  },
  headingText: {
    fontSize: 10,
    color: '#000000',
    fontWeight: 'bold',
    paddingTop: 20,
    paddingHorizontal: 8

  },

})