import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import PlayerCard from '../components/PlayerCard';
import { playersData } from '../data/playersData';
import { textStyles } from '../styles/globalStyles';

export default function PlayersScreen({ navigation }) {
  // Función para renderizar una sección de jugadores
  const renderPlayerSection = (title, players) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {players.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header con botón de regreso */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Jugadores de La Tri</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Porteros */}
        {renderPlayerSection('🧤 Porteros', playersData.goalkeepers)}

        {/* Defensores */}
        {renderPlayerSection('🛡️ Defensores', playersData.defenders)}

        {/* Mediocampistas */}
        {renderPlayerSection('⚡ Mediocampistas', playersData.midfielders)}

        {/* Delanteros */}
        {renderPlayerSection('⚽ Delanteros', playersData.forwards)}

        {/* Espacio final */}
        <View style={styles.footer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E6',
  },
  header: {
    backgroundColor: '#FFCC00',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003DA5',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003DA5',
    ...textStyles.title,
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 70,
  },
  scrollView: {
    flex: 1,
    paddingTop: 10,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003DA5',
    ...textStyles.subtitle,
    marginBottom: 12,
    paddingLeft: 5,
  },
  horizontalScroll: {
    paddingBottom: 5,
  },
  footer: {
    height: 30,
  },
});