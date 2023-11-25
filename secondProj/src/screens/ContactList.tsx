import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Ankush Diwakar',
            status: 'Just an extra ordinary developer',
            imageUrl: 'https://i.postimg.cc/rsxdC92g/Screenshot-65.png',
        },
        {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ];

    return (
        <View>
            <ScrollView scrollEnabled={false}>
                <Text style={styles.mainTitle}>ContactList</Text>
      

                {
                    contacts.map((contacts) => (
                        <View key={contacts.uid} style={styles.containerContactList}>

                            <Image
                                source={{
                                    uri: contacts.imageUrl,
                                }}
                                style={styles.imageStyle}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.userName}>{contacts.name}</Text>
                                <Text style={styles.userStatus}>{contacts.status}</Text>
                            </View>
                            
                        </View>
                    ))

                }


            </ScrollView>



        </View>
    )
}

const styles = StyleSheet.create({
    containerContactList:{
        flexDirection:'row',
        margin:10
    },
    textContainer:{
        paddingLeft:15,
        paddingTop:7
    },
    imageStyle: {
        width:60,
        height:60,
        borderRadius:60/2,
    },
    userName:{
        fontWeight:'800'
    },
    userStatus:{},
    mainTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        marginLeft: 20,
        margin:20
    },
})