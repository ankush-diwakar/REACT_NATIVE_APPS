import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {

    function openWebsite(linkURL: string) {
        Linking.openURL(linkURL)
    }
    return (
        <View>
            <Text style={styles.mainTitle}>ActionCards</Text>
            <View style={[styles.mainContainer, styles.cardElevated]}>

                <View style={styles.titleCon}>
                    <Text style={styles.cardTitle21}>DO YOU KNOW?</Text>
                </View>


                <View style={styles.cardImageContainer}>
                    <Image source={{
                        uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1699858358974/e44dba47-70f8-42e0-8dd2-7ef01937688e.png?w=500&h=262&fit=crop&crop=entropy&auto=compress,format&format=webp'
                    }}
                        style={[styles.imageStyle, styles.imageElevation]} />
                </View>
                <View style={styles.cardBody}>
                    <Text numberOfLines={4}>In the dynamic world of mobile app development, choosing the right framework is crucial for success. React Native and Flutter stand out as two of the most popular frameworks, each with its unique set of advantages. Today, we delve into the realm of easiness, 
                    exploring why React Native emerges as the champion in terms of simplicity and developer-friendly features.</Text>
                </View>
                <View style={styles.cardHyperLink}>
                    <TouchableOpacity>
                        <Text onPress={() => openWebsite('https://ankushhh.hashnode.dev/react-native-vs-flutter-unveiling-the-easiness-factor')}>ReadMore...</Text>
                    </TouchableOpacity>
                    <View style={styles.linekInCon}> 
                        <TouchableOpacity>
                            <Text style={styles.cardTitle2}>Follow me on</Text>
                            <Text onPress={() => openWebsite('https://github.com/ankush-diwakar')} style={styles.cardTitle}>GITHUB</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginLeft: 16,
        borderRadius: 6,
        width: 380,
        height: 490,
        marginBottom: 10,
        marginTop: 10

    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 10,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#000814',


    },
    titleCon: {
        alignItems: 'center'
    },
    mainTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        marginLeft: 20
    },
    cardTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingTop:-18,
        marginRight:5
    },
    cardTitle21:{

        fontWeight: 'bold',
        paddingVertical:7
    },
    cardTitle2:{

        fontWeight: 'bold',
    },

    cardImageContainer: {},
    imageStyle: {
        width: 370,
        height: 250
    },
    imageElevation: {},
    cardBody: {
        paddingTop: 10,
        paddingLeft: 10
    },
    cardHyperLink: {
        marginVertical: 8,
        paddingLeft: 10
    },
    linekInCon:{

        paddingTop:25,
        alignItems:'center',
        justifyContent:'center'
    }

})