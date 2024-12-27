import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

export default function Tarjeta(props: any) {
    function detalles(nombre: string) {
        Alert.alert("Advertencia ⚠️", `El personaje se llama ${nombre}`);
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => detalles(props.informacion.name)} 
        >
            <Text>{props.informacion.name}</Text>
            <View style={styles.fila}>
                <Image
                    style={styles.img}
                    source={{ uri: props.informacion.image }}
                />
                <Text>{props.informacion.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        margin: 10,
        borderRadius: 20,
    },
    img: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
    },
    fila: {
        flexDirection: 'row',
        fontWeight: 'bold',
    },
});
