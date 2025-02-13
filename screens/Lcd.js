import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function IncubatorScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#24589e" />
        </TouchableOpacity>
        <Text style={styles.title}>Configuración LCD</Text>
      </View>

      <Image source={require('../images/lcd.jpg')} style={styles.logo} />

      <View style={styles.section}>
        <View style={styles.circle}>
        <Ionicons name="thermometer-outline" size={40} color="#24589e" style={styles.icon} />
        </View>
        <View style={styles.separator}>
          <Text style={styles.label}>Mostrar Temperatura:</Text>
          <Text style={styles.value}>37.10°C</Text>
        </View>
      </View>

      <View style={styles.section}>
      <View style={styles.circle}>
        <Ionicons name="water-outline" size={40} color="#24589e" style={styles.icon} />
        </View>
        <View style={styles.separator}>
          <Text style={styles.label}>Mostrar Humedad:</Text>
          <Text style={styles.value}>54.30%</Text>
        </View>
      </View>

      <View style={styles.section}>
      <View style={styles.circle}>
        <Ionicons name="calendar-outline" size={40} color="#24589e" style={styles.icon} />
        </View>
        <View style={styles.separator}>
          <Text style={styles.label}>Mostrar Control de días:</Text>
          <Text style={styles.value}>17 Días</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#24589e',
    flex: 1,
    textAlign: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'center',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  separator: {
    marginLeft: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#24589e',
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },  
  circle: {
    width: 50,
    height: 50,
    borderRadius: 75, 
    backgroundColor: '#F0D637', 
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', 
  },
});
