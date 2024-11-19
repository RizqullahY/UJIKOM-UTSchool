import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const GarageScreen = () => {
return (
	<ImageBackground source={require('../img/bg_garage.jpg')} style={styles.background}>
		<View style={styles.container}>
		<Image source={require('../img/logo.png')} style={styles.logo} />
		<Text style={styles.header}>Welcome to Bengkel Central Otomotif</Text>
		<Text style={styles.description}>
			Bengkel Central Otomotif terkenal di seantero Nusantara 
			karena menyediakan layanan lengkap untuk perawatan dan perbaikan kendaraan. 
			Serta mengutamakan kualitas dalam setiap layanan yang ditawarkan, 
			mulai dari perbaikan mesin hingga perawatan rutin kendaraan.
		</Text>
		<Text style={styles.contactInfo}>
			Alamat: Cakung, Jakarta Timur
		</Text>
		<Text style={styles.contactInfo}>Phone: +62 1545 1390 7890</Text>
		</View>
	</ImageBackground>
);
};

const styles = StyleSheet.create({
background: {
	flex: 1,
	resizeMode: 'cover',
	justifyContent: 'center',
},
container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	padding: 20,
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
logo: {
	width: 150,
	height: 150,
	marginBottom: 20,
},
header: {
	fontSize: 28,
	fontWeight: 'bold',
	textAlign: 'center',
	color: '#fff',
	marginBottom: 10,
},
description: {
	fontSize: 18,
	textAlign: 'justify',  
	textAlignLast: 'justify', 
	color: '#fff',
	marginBottom: 20,
},
contactInfo: {
	fontSize: 16,
	textAlign: 'center',
	color: '#fff',
	marginBottom: 10,
},
});

export default GarageScreen;
