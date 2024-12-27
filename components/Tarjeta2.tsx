import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

interface Song {
    id: string;
    title: string;
    artist: {
        name: string;
        genre: string;
        year_formed: number;
    };
    album: string;
    year: number;
    duration: string;
    media: {
        url: string;
        cover_image: string;
    };
}

export default function Tarjeta2({ informacion }: { informacion: Song }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableOpacity
                style={styles.container}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.title}>{informacion.title}</Text>
                <View style={styles.fila}>
                    <Image
                        style={styles.img}
                        source={{ uri: informacion.media.cover_image }}
                    />
                    <TouchableOpacity>
                    <View style={styles.mediaInfo}>
                        <Text style={styles.mediaUrl}>URL: {informacion.media.url}</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image
                            style={styles.modalImage}
                            source={{ uri: informacion.media.cover_image }}
                        />
                        <View style={styles.infoContainer}>
                            <Text style={styles.artistName}>{informacion.artist.name}</Text>
                            <Text style={styles.albumText}>Album: {informacion.album}</Text>
                            <Text style={styles.yearText}>Año: {informacion.year}</Text>
                            <Text style={styles.durationText}>Duración: {informacion.duration}</Text>
                        </View>
                        
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        margin: 10,
        borderRadius: 20,
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    img: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    fila: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mediaInfo: {
        flex: 1,
        marginLeft: 10,
    },
    mediaUrl: {
        fontSize: 14,
        color: 'black',
        marginTop: 10,
        textAlign: 'justify',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
        borderRadius: 10,
    },
    infoContainer: {
        width: '100%',
        marginBottom: 20,
    },
    artistName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    albumText: {
        fontSize: 18,
        marginBottom: 5,
    },
    yearText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
    durationText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
    closeButton: {
        backgroundColor: 'grey',
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 30,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});