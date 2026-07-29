import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Acerca de</Text>
      <Text style={styles.subHeader}>Desarrolladores de la App</Text>

      <View style={styles.card}>
        <Video
          source={require('../../assets/videos/Saludo.mp4')}
          style={styles.video}
          useNativeControls
          resizeMode={ResizeMode.COVER}
          isLooping
          shouldPlay
        />

        <View style={styles.info}>
          <Text style={styles.name}>Segundo Tipanquiza</Text>
          <Text style={styles.role}>Estudiante de Ingenieri en Sistemas</Text>
          <Text style={styles.description}>
            Estudiante apasionado por el desarrollo de aplicaciones móviles y la tecnología.
          </Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#003DA5',
    textAlign: 'center',
    marginTop: 20,
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  video: {
    width: 80, 
    height: 80, 
    borderRadius: 40,
    marginRight: 15,
    backgroundColor: '#eee',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 14,
    color: '#003DA5',
    fontWeight: '600',
    marginVertical: 3,
  },
  description: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
});