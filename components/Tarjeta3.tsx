import { View, Text, TouchableOpacity, Modal, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function Tarjeta3(props: any) {
    const [visible, setVisible] = useState(false);

    const { datos } = props; // Desestructuramos `datos` para facilitar su uso

    return (
        <TouchableOpacity onPress={() => setVisible(true)} style={styles.card}>
            <Text style={styles.cardText}>{datos}</Text>
            <Modal
                visible={visible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setVisible(false)}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        {/* Botón para cerrar el modal */}
                        <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity>

                        {/* Imagen del personaje */}
                        {props.details.images && (
                            <Image
                                source={{ uri: props.details.images.main }}
                                style={styles.image}
                            />
                        )}

                        {/* Información adicional */}
                        <Text style={styles.textTitle}>{datos}</Text>
                        <Text style={styles.textDetail}>Especie: {props.details.species}</Text>
                        <Text style={styles.textDetail}>Planeta: {props.details.homePlanet}</Text>
                        <Text style={styles.textDetail}>Ocupación: {props.details.occupation}</Text>
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        margin: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        elevation: 3,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
    },
    closeButton: {
        alignSelf: 'flex-end',
        padding: 10,
    },
    closeButtonText: {
        fontSize: 16,
        color: '#2196F3',
    },
    image: {
        width: 150, // Ajuste del ancho
        height: 150, // Ajuste del alto
        borderRadius: 75, // Hacerla circular
        marginBottom: 15,
        resizeMode: 'cover', // Ajuste para recortar correctamente
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    textDetail: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'center',
    },
});
