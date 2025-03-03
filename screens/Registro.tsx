import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import axios from 'axios';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Registro() {
  const navigation = useNavigation<NavigationProps>();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistro = async () => {
    // Validar que todos los campos estén llenos
    if (!nombre || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
  
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }
  
    try {
      // Enviar los datos al backend
      const response = await axios.post('http://192.168.1.98:3000/auth/register', {
        nombre,
        email,
        password,
      });
  
      // Si el registro es exitoso, redirigir al usuario
      if (response.status === 201) {
        Alert.alert('Éxito', 'Usuario registrado con éxito', [
          { text: 'OK', onPress: () => navigation.navigate('Login') },
        ]);
      }
    } catch (error) {
      // Manejar errores
      if (axios.isAxiosError(error)) {
        Alert.alert('Error', error.response?.data.message || 'Hubo un problema al registrar el usuario');
      } else {
        Alert.alert('Error', 'Hubo un problema al registrar el usuario');
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EggSync</Text>
      <Text style={styles.title2}>¡Hola! Regístrate para comenzar</Text>

      <TextInput
        placeholder="Nombre"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder="Correo Electrónico"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Confirma tu contraseña"
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleRegistro}>
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