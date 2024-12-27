import { StyleSheet, Text, View, ImageBackground, TextInput, Alert, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'

export default function pagina1Screen({navigation}:any) {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState("");
    const [ciudad, setCiudad] = useState('');

    const datosALert = () => {
        const esMayorDeEdad = Number.parseInt(edad) >= 18 ? 'Ususario mayor de Edad' : 'Usuario menor de Edad';

        Alert.alert(
            'Gracias ♥',
            `Tus datos se han guardado correctamente:\nNombre: ${nombre}\nEdad: ${edad} (${esMayorDeEdad})\nCiudad: ${ciudad}`,
            [
                {
                    text: 'OK',
                    onPress: () => {
                        setNombre('');
                        setEdad("");
                        setCiudad('');
                    }
                }
            ]
        );
    };

    return (
        <ImageBackground
            source={{ uri: "https://4kwallpapers.com/images/walls/thumbs/13338.jpg" }}
            style={styles.img}>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='INGRESAR NOMBRE'
                    placeholderTextColor={'white'}
                    value={nombre}
                    onChangeText={(texto) => setNombre(texto)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='INGRESAR EDAD'
                    placeholderTextColor={'white'}
                    onChangeText={(texto) => setEdad(texto)}
                    keyboardType="numeric"
                    value={edad}
                />
                <TextInput
                    style={styles.input}
                    placeholder='INGRESAR CIUDAD'
                    placeholderTextColor={'white'}
                    value={ciudad}
                    onChangeText={(texto) => setCiudad(texto)}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => datosALert()}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.buttonText}>Welcome Screen</Text>
                </TouchableOpacity>
            </View>
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    img: {
        flex: 1,
    },
    form: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end',
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        fontSize: 20,
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        color: 'white',
    },
    button: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})
