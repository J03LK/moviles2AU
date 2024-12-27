import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation}: any) {
    return (
        <ImageBackground 
            source={require('../assets/images/background.jpg')} // Asegúrate de tener una imagen en esta ruta
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.name}>Kevin Lasluisa</Text>
                <Text style={styles.career}>Desarrollo de Software</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Drawer')}>
                    <Text style={styles.buttonText}>Registro</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', // Overlay semi-transparente
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
    },
    career: {
        fontSize: 24,
        color: 'white',
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#4A90E2', // Azul más moderno
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25, // Bordes más redondeados
        alignItems: 'center',
        elevation: 5, // Sombra en Android
        shadowColor: '#000', // Sombra en iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})