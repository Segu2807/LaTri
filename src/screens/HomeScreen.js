
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { textStyles } from '../styles/globalStyles';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.greeting}>¡Hola, Segundo Tipanquiza!</Text>
        <Text style={styles.welcomeText}>Torneo de Selecciones 2026</Text>
      </View>
      <View style={styles.championCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>SEGUNDO LUGAR</Text>
        </View>
        <Image 
          source={require('../../assets/images/argentina.jpg')}
          style={styles.flag} 
        />
        <Text style={styles.subTitle}>Argentina</Text>
        <Text style={styles.subText}>Subcampeón del La Copa del Mundo</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.footerText}>Director Tecnico: Escaloni</Text>
          <Text style={styles.footerText}>Capitan: L. Messi</Text>
          <Text style={styles.footerText}>Final: España 1 - 0 Argentina</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 20,
  },
  welcomeContainer: {
    backgroundColor: '#003DA5',
    padding: 25,
    borderRadius: 20,
    marginBottom: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFCC00',
    ...textStyles.title,
  },
  welcomeText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
    ...textStyles.body,
  },
  championCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  cardHeader: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003DA5',
  },
  flag: {
    width: 120,
    height: 80,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#75AADB',
    marginTop: 5,
  },
  subText: {
    fontSize: 16,
    color: '#f0e6e6',
    ...textStyles.body,
  },
  cardFooter: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    backgroundColor: '#FFCC00',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#003DA5',
    fontWeight: 'bold',
    fontSize: 16,
  },
});