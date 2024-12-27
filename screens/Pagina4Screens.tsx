import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from '../assets/data/musica.json'
import Tarjeta from '../components/Tarjeta2'

export default function Pagina4Screens() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Música</Text>
            <FlatList
                data={datos.musica}
                renderItem={({ item }) => <Tarjeta informacion={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
});