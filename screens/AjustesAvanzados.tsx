import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function AjustesAvanzados() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#24589e" />
        </TouchableOpacity>
        <Text style={styles.title}>Ajustes Avanzados</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Aquí van las opciones de ajustes avanzados.</Text>
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
    marginRight: 45,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#24589e',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 18,
    color: '#24589e',
  },
});
