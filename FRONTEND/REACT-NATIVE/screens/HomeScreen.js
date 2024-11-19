import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, StyleSheet} from 'react-native';

  const Header = ({ navigation }) => {
      const buttons = [
        { title: 'Tentang', navigateTo: 'TentangScreen' },
        { title: 'Layanan', navigateTo: 'LayananScreen' },
      ];
      return (
        <ImageBackground
          source={require('../img/bg_garage.jpg')}
          style={{ flex: 1 }}>
        <View style={{ flex: 1, zIndex: 9 }}>
            <View
            style={{
              marginTop: 180,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: 28,
            }}
            >
        <Image source={require("../img/logo.png")} style={styles.logo} />
              {buttons.map((button, index) => (
              <TouchableOpacity key={index} onPress={() => 
              navigation.navigate(button.navigateTo)} >
                  <Text 
                  style={{ 
                    color:'black',
                    padding: 10, 
                    borderRadius: 20, 
                    fontWeight: 900, 
                    backgroundColor:'rgba(255, 255, 255, 0.5)', 
                    minWidth: 200, 
                    textAlign: 'center', 
                    fontSize: 18,
                    elevation:60, }}>{button.title}</Text>
              </TouchableOpacity>
              ))}
            </View>
        </View>
        </ImageBackground>
      );
  };
  const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, 
    },
  });

  export default Header;