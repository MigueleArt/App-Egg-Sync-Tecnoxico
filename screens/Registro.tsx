import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Registro() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EggSync</Text>
      <Text style={styles.title2}>¡Hola! Regístrate para comenzar</Text>

      <TextInput placeholder="Nombre" style={styles.input} />
      <TextInput placeholder="Correo Electrónico" style={styles.input} />
      <TextInput placeholder="Contraseña" style={styles.input} secureTextEntry />
      <TextInput placeholder="Confirma tu contraseña" style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#24589e',
  },
  title2: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#24589e',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  buttonPrimary: {
    backgroundColor: '#24589e',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
