import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Pagina6Screen() {
    const [datos, setDatos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [filtroGenero, setFiltroGenero] = useState(null); // null muestra todos

    useEffect(() => {
        async function leer() {
            try {
                const resp = await fetch('https://randomuser.me/api/?results=20');
                const json = await resp.json();
                setDatos(json.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        leer();
    }, []);

    const datosFiltrados = filtroGenero 
        ? datos.filter(user => user.gender === filtroGenero)
        : datos;

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.userItem}
            onPress={() => {
                setSelectedUser(item);
                setModalVisible(true);
            }}
        >
            <Image 
                source={{ uri: item.picture.thumbnail }} 
                style={styles.thumbnail}
            />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>
                    {item.name.first} {item.name.last}
                </Text>
                <Text style={styles.userEmail}>{item.email}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <TouchableOpacity 
                    style={[
                        styles.filterButton,
                        filtroGenero === 'male' && styles.filterButtonActive
                    ]}
                    onPress={() => setFiltroGenero(filtroGenero === 'male' ? null : 'male')}
                >
                    <Text style={styles.filterText}>Hombres</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[
                        styles.filterButton,
                        filtroGenero === 'female' && styles.filterButtonActive
                    ]}
                    onPress={() => setFiltroGenero(filtroGenero === 'female' ? null : 'female')}
                >
                    <Text style={styles.filterText}>Mujeres</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={datosFiltrados}
                renderItem={renderItem}
                keyExtractor={item => item.login.uuid}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
            
            {modalVisible && selectedUser && (
                <View style={styles.modalView}>
                    <Image 
                        source={{ uri: selectedUser.picture.large }} 
                        style={styles.largePicture}
                    />
                    <Text style={styles.modalName}>
                        {selectedUser.name.first} {selectedUser.name.last}
                    </Text>
                    <Text>{selectedUser.email}</Text>
                    <Text>{selectedUser.location.city}, {selectedUser.location.country}</Text>
                    <TouchableOpacity 
                        onPress={() => setModalVisible(false)}
                        style={styles.closeButton}
                    >
                        <Text>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    userItem: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userInfo: {
        marginLeft: 15,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 14,
        color: '#666',
    },
    separator: {
        height: 1,
        backgroundColor: '#eee',
    },
    modalView: {
        position: 'absolute',
        top: '20%',
        left: '10%',
        right: '10%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
    },
    largePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 15,
    },
    modalName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 5,
    },
    filterContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        gap: 10
    },
    filterButton: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#eee',
        minWidth: 100,
        alignItems: 'center'
    },
    filterButtonActive: {
        backgroundColor: '#007AFF',
    },
    filterText: {
        fontWeight: '500'
    }
});
