// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text } from 'react-native'; // Solo importamos Text y StyleSheet
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import SpainScreen from './src/screens/SpainScreen';
import AboutScreen from './src/screens/AboutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Configuración de las Tabs (Barra Inferior)
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#FFCC00',
        tabBarInactiveTintColor: '#fff',
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        // 👇 AQUÍ ESTÁ EL CAMBIO A EMOJIS (SOLUCIÓN 1) 👇
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = '🏠'; // Icono de casita
          } else if (route.name === 'SpainTab') {
            iconName = '🇪🇸'; // Bandera de España
          } else if (route.name === 'AboutTab') {
            iconName = '👤'; // Icono de persona
          }
          // Devolvemos un componente Text con el emoji
          return <Text style={{ fontSize: 24, color: color }}>{iconName}</Text>;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="SpainTab" component={SpainScreen} options={{ title: 'España' }} />
      <Tab.Screen name="AboutTab" component={AboutScreen} options={{ title: 'Acerca de' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 segundos para que se vea bien la carga

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Reemplazamos Home y Players por el Tab Navigator */}
        <Stack.Screen name="MainApp" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#003DA5', // Azul Ecuador
    height: 60,
    paddingBottom: 5,
    borderTopWidth: 0,
  },
});