import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function IncubatorScreen() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#24589e" />
        </TouchableOpacity>
        <Text style={styles.title}>Configuración y control</Text>
      </View>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Incubadora')}>
        <Text style={styles.optionText}>Estado Incubadora</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Lcd')}>
        <Text style={styles.optionText}>Configuración LCD</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Notificaciones')}>
        <Text style={styles.optionText}>Notificaciones</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('AjustesAvanzados')}>
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
    paddingTop: 55,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#24589e',
    marginLeft: 10,
  },
  backButton: {
    position: 'absolute',
    left: 15,
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
    color: '#24589e',
  },
  icon: {
    width: 40,
    height: 40,
  },
});
