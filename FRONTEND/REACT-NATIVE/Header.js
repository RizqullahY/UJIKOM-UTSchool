import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
	Image,
} from "react-native";
import * as Notifications from "expo-notifications";

const sendNotification = async () => {
	await Notifications.scheduleNotificationAsync({
		content: {
			title: "SELAMAT DATANG",
			body: `Di Bengkel Central Otomotif 🚀`,
		},
		sound: 'default',
		trigger: null,
	});
};

const Header = ({ navigation }) => {
	return (
		<ImageBackground source={require("./img/bg1.jpg")} style={styles.background}>
			<View style={styles.container}>
				<Image source={require("./img/logo.png")} style={styles.logo} />
				<Text style={styles.title}>Welcome To</Text>
				<Text style={styles.Stitle}>Bengkel Central Otomotif</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate("Home");
						sendNotification();
					}}
				>
					<Text style={styles.btnTxt}>Lihat</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.73)",
		padding: 20,
		borderRadius: 20,
		width: "75%",
		height: "67.5%",
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		marginBottom: 5,
		color: "white",
		textAlign: "center",
	},
	Stitle: {
		fontSize: 32,
		marginBottom: 20,
		color: "white",
		textAlign: "center",
	},
	button: {
		height: 50,
		width: 200,
		position: "relative",
		backgroundColor: "rgba(255, 255, 255, 0.15)",
		borderWidth: 2,
		borderColor: "#fff",
		borderRadius: 30,
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
	},
	btnTxt: {
		zIndex: 1,
		fontWeight: "800",
		letterSpacing: 4,
		color: "#fff",
	},
	overlay: {
		position: "absolute",
		left: 0,
		top: 0,
		backgroundColor: "white",
		borderRadius: 30,
		height: 10,
		width: 10,
		zIndex: -1,
		opacity: 0.2,
	},
	logo: {
		width: 200,
		height: 200,
	},
});

export default Header;
