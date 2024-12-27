import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

const CalculatorApp = () => {
    const [result, setResult] = useState('0');
    const [firstNumber, setFirstNumber] = useState('');
    const [operation, setOperation] = useState('');

    const handleNumber = (num: string) => {
        if (result === '0') {
            setResult(num);
        } else {
            setResult(result + num);
        }
    };

    const handleOperation = (op: string) => {
        setOperation(op);
        setFirstNumber(result);
        setResult('0');
    };

    const calculate = () => {
        const first = parseFloat(firstNumber);
        const second = parseFloat(result);

        switch (operation) {
            case '+':
                setResult((first + second).toString());
                break;
            case '-':
                setResult((first - second).toString());
                break;
            case 'x':
                setResult((first * second).toString());
                break;
            case '/':
                if (second === 0) {
                    setResult('Error');
                } else {
                    setResult((first / second).toString());
                }
                break;
        }
    };

    const clear = () => {
        setResult('0');
        setFirstNumber('');
        setOperation('');
    };

    const buttonLayout = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', 'x'],
        ['1', '2', '3', '-'],
        ['0', 'C', '=', '+']
    ];

    return (
        <ImageBackground
            source={require('../assets/images/calculadora.jpg')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.resultContainer}>
                        <Text style={styles.result}>{result}</Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        {buttonLayout.map((row, rowIndex) => (
                            <View key={rowIndex} style={styles.row}>
                                {row.map((button) => (
                                    <TouchableOpacity
                                        key={button}
                                        style={[
                                            styles.button,
                                            '+-x/'.includes(button) && styles.operatorButton,
                                            button === '=' && styles.equalButton
                                        ]}
                                        onPress={() => {
                                            if (button === 'C') clear();
                                            else if (button === '=') calculate();
                                            else if ('+-x/'.includes(button)) handleOperation(button);
                                            else handleNumber(button);
                                        }}
                                    >
                                        <Text style={[
                                            styles.buttonText,
                                            '+-x/='.includes(button) && styles.operatorText
                                        ]}>
                                            {button}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    resultContainer: {
        flex: 0.3,
        justifyContent: 'flex-end',
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 10,
        marginBottom: 20,
    },
    result: {
        fontSize: 48,
        color: '#ffffff',
        textAlign: 'right',
        textShadowColor: 'rgba(0,0,0,0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    buttonsContainer: {
        flex: 0.7,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.9)',
        margin: 5,
        borderRadius: 15,
        elevation: 3,
    },
    operatorButton: {
        backgroundColor: 'rgba(255,149,0,0.9)',
    },
    equalButton: {
        backgroundColor: 'rgba(0,122,255,0.9)',
    },
    buttonText: {
        fontSize: 28,
        color: '#333333',
        fontWeight: 'bold',
    },
    operatorText: {
        color: '#ffffff',
    },
});

export default CalculatorApp;