// src/screens/SplashScreen.js
import React from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Logo (Asegúrate de que la imagen 'España.png' esté en tus assets) */}
      <Image
        source={require('../../assets/images/España.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Torneo de Selecciones 2026</Text>
      
      {/* Indicador de carga */}
      <ActivityIndicator size="large" color="#FFCC00" style={styles.loader} />
      <Text style={styles.loadingText}>Cargando aplicación...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003DA5', // Azul oscuro de Ecuador
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff',
    marginTop: 5,
  },
  loader: {
    marginTop: 40,
  },
  loadingText: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 14,
  },
});