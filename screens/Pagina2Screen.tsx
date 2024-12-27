import { FlatList, FlatListComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function pagina2Screen() {
    const usuarios = [
        {
            nombre: "Juan paz",
            edad: "23",
            ciudad: "Quito"
        },
        {
            nombre: "Juan paz",
            edad: "23",
            ciudad: "Quito"
        },
        {
            nombre: "Juan paz",
            edad: "23",
            ciudad: "Quito"
        }
    ]
    return (
        <View>
            <Text style={{fontSize:40, textAlign:'center'}}>Usuarios</Text>
            <FlatList
                data={usuarios}
                renderItem={({ item }) =>
                    <View>
                    <Text>{item.nombre}</Text>
                    <Text>{item.edad}</Text>
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})