import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Logo oficial de la Selección Ecuatoriana (vía URL) */}
      <Image
        source={{ uri: 'https://www.pinterest.com/pin/554365035398727139/' }}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* Texto solicitado: "Ecuador - La Tri" */}
      <Text style={styles.title}>Ecuador - La Tri</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC00', // Amarillo de Ecuador
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003DA5', // Azul de Ecuador
    marginTop: 10,
  },
});