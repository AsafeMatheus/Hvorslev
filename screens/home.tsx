import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import styles from '../styles/home-style'

export default function({navigation}:any){
    return(
        <View style={styles.conteiner}>
            <Image source={require('../assets/images/method.jpg')} style={styles.image} />
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('Calculator')
            }}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}