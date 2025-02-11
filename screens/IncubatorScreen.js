import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function IncubatorScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Configuración y control</Text>
      </View>
      
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Estado Incubadora</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Configuración LCD</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Notificaciones</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Ajustes Avanzados</Text>
      </TouchableOpacity>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  titleContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  optionButton: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
