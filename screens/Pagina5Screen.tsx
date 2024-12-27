import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal, TouchableOpacity, Image } from 'react-native';

export default function Pagina5Screen() {
    const [datos, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        async function leer() {
            try {
                const resp = await fetch('https://api.sampleapis.com/futurama/characters');
                const json = await resp.json();
                setData(json);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        leer();
    }, []);

    const openModal = (character) => {
        setSelectedCharacter(character);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedCharacter(null);
    };

    return (
        <View style={styles.container}>
            {datos.length === 0 && (
                <Text style={{ textAlign: 'center', marginTop: 20 }}>Cargando datos...</Text>
            )}
            <FlatList
                data={datos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => openModal(item)}>
                        <Text style={styles.cardText}>
                            {item.name.first} {item.name.last}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            {selectedCharacter && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                >
                    <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
                        <View style={styles.modalContent}>
                            <Image
                                source={{ uri: selectedCharacter.images.main }}
                                style={styles.image}
                            />
                            <Text style={styles.textTitle}>
                                {selectedCharacter.name.first} {selectedCharacter.name.last}
                            </Text>
                            <Text style={styles.textDetail}>
                                Especie: {selectedCharacter.species}
                            </Text>
                            <Text style={styles.textDetail}>
                                Planeta: {selectedCharacter.homePlanet || 'Desconocido'}
                            </Text>
                            <Text style={styles.textDetail}>
                                Ocupación: {selectedCharacter.occupation}
                            </Text>
                            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    card: {
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        elevation: 2,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '90%', 
        height: '70%', 
        backgroundColor: '#fff',
        borderRadius: 15, 
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    image: {
        width: '80%', 
        height: '50%', 
        resizeMode: 'contain', 
        marginBottom: 10,
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
    closeButton: {
        padding: 15,
        backgroundColor: '#2196F3',
        borderRadius: 8,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
