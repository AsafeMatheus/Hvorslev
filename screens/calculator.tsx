import React, {useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native'
import styles from '../styles/calculator-style'

export default function({navigation}:any){
    const [cellDiameter, setCellDiameter] = useState('')
    const [innerDiameter, setInnerDiameter] = useState('')
    const [charge1, setCharge1] = useState('')
    const [charge2, setCharge2] = useState('')
    const [length, setLength] = useState('')
    const [time1, setTime1] = useState('')
    const [time2, setTime2] = useState('')

    function calculate(cellDiameter:any, innerDiameter:any, charge1:any, charge2:any, length:any, t1:any, t2:any){
        let innerDiameterSquared = innerDiameter**2
        let twoTimesLengthbyCellDiameter = (2 * length) / cellDiameter
        let eightTimesLengthTimesT2MinusT1 = (8*length)*(t2 - t1)
        let charge1ByCharge2 = charge1 / charge2

        let firstStepAbove = innerDiameterSquared * Math.log(twoTimesLengthbyCellDiameter)
        let secondStepDivided = firstStepAbove / eightTimesLengthTimesT2MinusT1
        let answer = secondStepDivided * Math.log(charge1ByCharge2)

        return answer
    }

    return(
        <View>
            <ScrollView style={styles.conteiner}>
                <View style={styles.inputConteiner}>
                    <Text style={styles.label}>Diâmetro interno da célula de medição</Text>
                    <TextInput
                        style={styles.textIput}
                        value={cellDiameter}
                        onChangeText={text => setCellDiameter(text)}
                    />
                </View>
                <View style={styles.inputConteiner}>
                    <Text style={styles.label}>Diâmetro interno do tubo</Text>
                    <TextInput
                        style={styles.textIput}
                        value={innerDiameter}
                        onChangeText={text => setInnerDiameter(text)}
                    />
                </View>
                <View style={styles.inputConteiner}>
                    <Text style={styles.label}>Carga piezométrica quando t1</Text>
                    <TextInput
                        style={styles.textIput}
                        value={charge1}
                        onChangeText={text => setCharge1(text)}
                    />
                </View>
                <View style={styles.inputConteiner}>
                    <Text style={styles.label}>Carga piezométrica quando t2</Text>
                    <TextInput
                        style={styles.textIput}
                        value={charge2}
                        onChangeText={text => setCharge2(text)}
                    />
                </View>
                <View style={styles.inputConteiner}>
                    <Text style={styles.label}>Comprimento interno da célula de medição</Text>
                    <TextInput
                        style={styles.textIput}
                        value={length}
                        onChangeText={text => setLength(text)}
                    />
                </View>
                <View style={styles.inputConteiner}>
                    <Text style={styles.label}>t1</Text>
                    <TextInput
                        style={styles.textIput}
                        value={time1}
                        onChangeText={text => setTime1(text)}
                    />
                </View>
                <View style={styles.lastInput}>
                    <Text style={styles.label}>t2</Text>
                    <TextInput
                        style={styles.textIput}
                        value={time2}
                        onChangeText={text => setTime2(text)}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('Response', {response: calculate(Number(cellDiameter), Number(innerDiameter), Number(charge1), Number(charge2), Number(length), Number(time1), Number(time2))})
            }}>
                <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}