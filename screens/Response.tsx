import React from 'react'
import {
    View,
    Text
} from 'react-native'
import styles from '../styles/response-style'
import {useNavigation} from '@react-navigation/native'

export default function({route, navigation}:any){
    let {response} = route.params

    return(
        <View style={styles.conteiner}>
            <Text>{response}</Text>
        </View>
    )
}