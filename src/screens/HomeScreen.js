import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function HomeScreen() {
  // Estado para el botón interactivo (opcional)
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleButtonPress = () => {
    setButtonPressed(true);
    Alert.alert(
      '¡Vamos Ecuador! 🇪🇨',
      'La Tri está lista para dar todo en la cancha. ¡Orgullo ecuatoriano!',
      [{ text: '¡Sí, Ecuador!', onPress: () => setButtonPressed(false) }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Encabezado con colores de Ecuador */}
      <View style={styles.header}>
        <Text style={styles.title}>Selección Ecuatoriana de Fútbol</Text>
        <Text style={styles.subtitle}>La TRI</Text>
      </View>

      {/* Logo / Escudo del equipo */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://www.instagram.com/p/B7R74h-BdzB/' }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Datos del equipo (3 datos básicos requeridos) */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Información del Equipo</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>🌎 Confederación:</Text>
          <Text style={styles.infoValue}>CONMEBOL</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>👨‍🏫 Entrenador actual:</Text>
          <Text style={styles.infoValue}>Sebastián Beccacece</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>🏟️ Estadio principal:</Text>
          <Text style={styles.infoValue}>Estadio Rodrigo Paz Delgado (Quito)</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>🏆 Copa América:</Text>
          <Text style={styles.infoValue}>4° lugar (1993, 2015, 2019)</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>🌍 Participaciones mundialistas:</Text>
          <Text style={styles.infoValue}>4 (2002, 2006, 2014, 2022 y 2026)</Text>
        </View>
      </View>

      {/* Botón interactivo (requerido) */}
      <TouchableOpacity
        style={[styles.button, buttonPressed && styles.buttonPressed]}
        onPress={handleButtonPress}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>🇪🇨 ¡Apoyar a La Tri! 🇪🇨</Text>
      </TouchableOpacity>

      {/* Espacio al final */}
      <View style={styles.footer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E6', // Fondo amarillo muy suave
  },
  header: {
    backgroundColor: '#FFCC00', // Amarillo Ecuador
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003DA5', // Azul Ecuador
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#003DA5',
    marginTop: 5,
    fontWeight: '600',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  infoContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003DA5',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#FFCC00',
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003DA5',
  },
  button: {
    backgroundColor: '#003DA5', // Azul Ecuador
    marginHorizontal: 40,
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonPressed: {
    backgroundColor: '#002277',
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#FFCC00',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    height: 30,
  },
});