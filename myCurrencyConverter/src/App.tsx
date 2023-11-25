import { FlatList, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
//constants
import { currencyByRupee } from './constants'
import Snackbar from 'react-native-snackbar';
import CurrencyButton from './components/CurrencyButton';



function App(): JSX.Element {

  const [inputAmount, setInputAmount] = useState('');
  const [result, setResult] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputAmount) {
      return Snackbar.show({
        text: "Please enter the value to convert",
        backgroundColor: '#b8b8ff',
        textColor: '#ffffff',
      
      })
    }
    const amount = parseFloat(inputAmount);
    if (!isNaN(amount)) {
      const convertedValue = amount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResult(result)
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: "OOOPS! seems number is not valid!",
        backgroundColor: '#b8b8ff',
        textColor: '#ffffff'
      })
    }
  }

  return (
   <>
   <StatusBar backgroundColor={'#b8b8ff'}></StatusBar>
    <View style={styles.container}>
      <View style={styles.topContainer}>

        <View style={styles.rupeesContainer}>
          <Text style={styles.rupee}>₹</Text>
          <TextInput style={styles.inputstyle}
            value={inputAmount}
            onChangeText={setInputAmount}
            keyboardType='number-pad'
            maxLength={14}
            placeholder='Enter the amount in rupees'
          />
        </View>
        {result && (
          <Text style={styles.resultTxt}>{result}</Text>
        )}
      </View>

          <View style={styles.bottomContainer}>
              <FlatList
                numColumns={2}
                keyExtractor={item => item.name}
                data={currencyByRupee}
                renderItem={({item}) => (
                  <Pressable 
                  style={
                    [
                      styles.button, targetCurrency === item.name && styles.selected]}
                      onPress={() => buttonPressed(item)}>
                        <CurrencyButton {...item }/>
                  </Pressable>
                )}
              ></FlatList>
          </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7ff',
  },
  inputstyle:{
    fontSize:20
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#b8b8ff',
  },
});

export default App;
