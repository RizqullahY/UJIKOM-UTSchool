import React from 'react';
import { useRef, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import Header from './Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TentangScreen from "./screens/TentangScreen"
import LayananScreen from "./screens/LayananScreen"
import HomeScreen from "./screens/HomeScreen"
import * as Notifications from 'expo-notifications';

const Stack = createStackNavigator();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
  });

const HeaderScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
    </View>
  );
};

const App = () => {
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          console.log(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response);
        });

        return () => {
          Notifications.removeNotificationSubscription(notificationListener.current);
          Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

  return (<><StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Header">
        <Stack.Screen name="Header" component={HeaderScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TentangScreen" component={TentangScreen} />
        <Stack.Screen name="LayananScreen" component={LayananScreen} />
      </Stack.Navigator>
    </NavigationContainer></>
  );
};

export default App;