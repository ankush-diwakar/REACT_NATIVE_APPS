import { StyleSheet, Text, View } from 'react-native'
import type { PropsWithChildren } from 'react'
import React from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name : string;
    flag: string;
}>
const CurrencyButton = (props : CurrencyButtonProps):JSX.Element=>{
    return(
        <View style={styles.buttonContainer}> 
            <Text style={styles.countryText}>{props.name}</Text>
            <Text style={styles.FlagText}>{props.flag}</Text>
        </View>
    )
}

export default CurrencyButton
const styles = StyleSheet.create({
    buttonContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    countryText:{
        fontSize:12,
        fontWeight:'500',
        marginTop:6,
        color:"#000000",
        marginBottom : 6
    },
    FlagText:{
        fontSize:10,
        color:"#000000"
    },
})