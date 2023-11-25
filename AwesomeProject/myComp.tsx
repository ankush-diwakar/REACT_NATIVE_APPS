import React from "react" 
import {
    Text,SafeAreaView,View,StyleSheet,useColorScheme
} from 'react-native'


function myComp(){
    const isDarkMode = useColorScheme() === 'dark'
   return(
    <View style={Mystyle.container}>
        <Text style={[isDarkMode ? Mystyle.textStyleWh : Mystyle.textStyleBlk]}>Hello world!! </Text>
    </View>
   )
}

const Mystyle = StyleSheet.create({
    container :{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    textStyleBlk:{
        color:'#000000',
        fontSize:20
    },
    textStyleWh:{
        color : '#ffffff'
    }
})

export default myComp