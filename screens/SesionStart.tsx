import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import axios from 'axios';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;

export default function SesionStart() {
  const navigation = useNavigation<NavigationProps>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.161.78:3000/api/auth/login', { email, password });
      if (response.data.message === 'Inicio de sesión exitoso') {
        // Guardar el token de autenticación (si estás usando JWT)
        // Por ejemplo: AsyncStorage.setItem('token', response.data.token);

        // Redirigir a la pantalla principal
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Credenciales incorrectas');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al iniciar sesión');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EggSync</Text>
      <Text style={styles.title2}>¡Bienvenido de nuevo!</Text>
      <Text style={styles.title3}>¡Me alegra verte de nuevo!</Text>

      <TextInput
        placeholder="Introduce tu correo electrónico"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Introduce tu contraseña"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.questionText}>¿No tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
          <Text style={styles.registerText}>Regístrese ahora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 70,
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 27,
    color: '#24589e',
  },
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#24589e',
  },
  title3: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#24589e',
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
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  questionText: {
    color: '#111111',
    fontSize: 15,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#24589e',
    fontSize: 15,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 240,
  },
});