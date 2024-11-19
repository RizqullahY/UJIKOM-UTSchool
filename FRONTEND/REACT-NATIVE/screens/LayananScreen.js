import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Modal,
} from "react-native";
import axios from "axios";

export default function Order() {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null); // State untuk menangani layanan yang dipilih
    const [modalVisible, setModalVisible] = useState(false); // State untuk mengontrol tampilan modal

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get(
                "http://192.168.0.113:5162/api/Layanan"
                // "http://192.168.1.37:5162/api/Layanan"
            );
            setServices(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleServiceDetail = (service) => {
        setSelectedService(service);
        setModalVisible(true);
    };
    const formatRupiah = (angka, prefix) => {
    let numberString = angka.toString().replace(/[^,\d]/g, '');
    let split = numberString.split(',');
    let sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix === undefined ? rupiah : (rupiah ? 'Rp' + rupiah : '');
};


    return (
        <ImageBackground
            source={require("../img/bg_garage.jpg")}
            style={{ flex: 1}}
        >
            <View style={styles.container}>
                <Text style={styles.header}>List of Services</Text>
                <FlatList
                    data={services}
                    keyExtractor={(item) => item.id_layanan.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>
                                Nama Layanan: {item.nama_layanan}
                            </Text>
                            <Text style={styles.isi}>
                                ID Layanan: {item.id_layanan}
                            </Text>
                            <Text style={styles.isi}>
                                Harga: {formatRupiah(item.harga, 'Rp')}
                            </Text>
                            <Text style={styles.isi}>
                                Deskripsi: {item.deskripsi}
                            </Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleServiceDetail(item)}
                            >
                                <Text style={styles.buttonText}>
                                    Lihat Detail
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitle}>
                                Detail Layanan
                            </Text>
                            <Text style={styles.modalText}>
                                Nama: {selectedService?.nama_layanan}
                            </Text>
                            <Text style={styles.modalText}>
                                ID: {selectedService?.id_layanan}
                            </Text>
                            <Text style={styles.modalText}>
                                Harga: Rp{selectedService?.harga}
                            </Text>
                            <Text style={styles.modalText}>
                                Deskripsi: {selectedService?.deskripsi}
                            </Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.buttonText}>Tutup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
        color: "#fff",
        textAlign:'center',
    },
    item: {
        marginTop: 10,
        padding: 15,
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#f6f6f6",
    },
    isi: {
        fontSize: 14,
        color: "#f6f6f6",
    },
    button: {
        backgroundColor: "#151515",
        padding: 10,
        maxWidth:100,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.8)",
    },
    modalView: {
        margin: 20,
        backgroundColor: "rgba(155,155,155,0.9)",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },
    modalText: {
        marginBottom: 4,
        fontSize: 18,
    },
    closeButton: {
        backgroundColor: "#151515",
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
    },
});
