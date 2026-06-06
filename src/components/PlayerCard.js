import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlayerCard({ player }) {
  return (
    <View style={styles.card}>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{player.number}</Text>
      </View>
      <Text style={styles.playerName}>{player.name}</Text>
      <Text style={styles.playerPosition}>{player.position}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginRight: 15,
    width: 120,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  numberContainer: {
    backgroundColor: '#2f00ff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  number: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  playerName: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  playerPosition: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});