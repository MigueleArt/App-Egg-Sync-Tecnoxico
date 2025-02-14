import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Notificaciones() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#24589e" />
        </TouchableOpacity>
        <Text style={styles.title}>Notificaciones</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.circle}>
        <Ionicons name="notifications-outline" size={40} color="#24589e"  />
        </View>
        <View style={styles.separator}>
          <Text style={styles.label}>EggSync</Text>
          <Text style={styles.value}>La temperatura de la incubadora está en niveles óptimos.</Text>
        </View>
      </View>

      <View style={styles.section}>
      <View style={styles.circle}>
        <Ionicons name="notifications-outline" size={40} color="#24589e"  />
        </View>
        <View style={styles.separator}>
          <Text style={styles.label}>EggSync</Text>
          <Text style={styles.value}>Revisa la humedad: podría ser necesario ajustarla.</Text>
        </View>
      </View>

      <View style={styles.section}>
      <View style={styles.circle}>
        <Ionicons name="notifications-outline" size={40} color="#24589e" />
        </View>
        <View style={styles.separator}>
          <Text style={styles.label}>EggSync</Text>
          <Text style={styles.value}>Faltan 3 días para completar el ciclo de incubación.</Text>
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
  section: {
    marginBottom: 20,
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    marginLeft: 10,
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#24589e',
  },
  value: {
    fontSize: 15,
    color: '#333',
  },
  
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    backgroundColor: '#F0D637',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', 
  },
});
