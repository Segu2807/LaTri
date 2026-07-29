import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function SpainScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🇪🇸 España</Text>
      </View>

      <View style={styles.flagContainer}>
        <Image 
          source={require('../../assets/images/España.png')} 
          style={styles.flag} 
        />
        <Text style={styles.countryName}>Seleccion Campeona</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Himno Nacional</Text>
        <Text style={styles.hymn}>Marcha Real</Text>
        <Text style={styles.hymnDetail}>«Dios salve al Rey, y a la Reina...»</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Equipación Oficial</Text>
        <View style={styles.kitRow}>
          <View style={styles.kitItem}>
            <View style={[styles.kitColor, { backgroundColor: '#C60B1E' }]} />
            <Text style={styles.kitLabel}>Local (Roja)</Text>
          </View>
          <View style={styles.kitItem}>
            <View style={[styles.kitColor, { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#C60B1E' }]} />
            <Text style={styles.kitLabel}>Visitante (Blanca)</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Jugadores Estrella</Text>
        <Text style={styles.players}>• Lamine Yanla (Extremo, Barcelona)</Text>
        <Text style={styles.players}>• Rodri (Mediocampista, Man. City)</Text>
        <Text style={styles.players}>• Nico Wilians (Delantero, Barcelona)</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#C60B1E',
    paddingVertical: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFC400',
  },
  flagContainer: {
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#fff',
    paddingVertical: 20,
    marginHorizontal: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 4,
  },
  flag: {
    width: 200,
    height: 130,
    resizeMode: 'contain',
  },
  countryName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  infoCard: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C60B1E',
    marginBottom: 10,
  },
  hymn: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#333',
  },
  hymnDetail: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  kitRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  kitItem: {
    alignItems: 'center',
  },
  kitColor: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  kitLabel: {
    fontSize: 14,
    color: '#333',
  },
  players: {
    fontSize: 15,
    color: '#444',
    marginVertical: 3,
  },
});