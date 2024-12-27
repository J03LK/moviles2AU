import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const App = () => {
    const [kelvin, setKelvin] = useState('');
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    // Especificamos que kelvinValue es de tipo number
    const convertTemperature = (kelvinValue: number) => {
        if (kelvinValue < 0) {
            Alert.alert("Error", "La temperatura en Kelvin no puede ser negativa");
            setKelvin('');
            setCelsius('');
            setFahrenheit('');
            return;
        }

        const celsiusValue = kelvinValue - 273.15;
        setCelsius(celsiusValue.toFixed(2));

        if (celsiusValue > 100) {
            Alert.alert(
                "Advertencia",
                "¡Se ha superado la temperatura de ebullición del agua (100°C)!"
            );
        }

        const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
        setFahrenheit(fahrenheitValue.toFixed(2));
    };

    // Especificamos que text es de tipo string
    const handleKelvinChange = (text: string) => {
        setKelvin(text);
        if (text === '') {
            setCelsius('');
            setFahrenheit('');
            return;
        }
        const kelvinValue = parseFloat(text);
        convertTemperature(kelvinValue);
    };
    return (
        <ImageBackground
            source={require('../assets/images/fondo.jpg')} // Asegúrate de tener esta imagen en tu carpeta assets
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Convertidor de Temperatura</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Temperatura en Kelvin:</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={kelvin}
                            onChangeText={handleKelvinChange}
                            placeholder="Ingrese temperatura en K"
                            placeholderTextColor="#666"
                        />
                    </View>

                    <View style={styles.resultContainer}>
                        <Text style={styles.resultLabel}>Resultados:</Text>

                        <View style={styles.resultBox}>
                            <Text style={styles.resultText}>Celsius:</Text>
                            <Text style={styles.value}>{celsius ? `${celsius}°C` : '-'}</Text>
                        </View>

                        <View style={styles.resultBox}>
                            <Text style={styles.resultText}>Fahrenheit:</Text>
                            <Text style={styles.value}>{fahrenheit ? `${fahrenheit}°F` : '-'}</Text>
                        </View>
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
        backgroundColor: 'rgba(0,0,0,0.5)', // Esto crea un overlay oscuro sobre la imagen
    },
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#fff',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#fff',
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 10,
        borderRadius: 5,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    resultContainer: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    resultLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    resultBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    resultText: {
        fontSize: 16,
        color: '#666',
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default App;