import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SesionStart() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>EggSync</Text>
            <Text style={styles.title2}>¡Bienvenido de nuevo!</Text>
            <Text style={styles.title3}>¡Me alegra verte de nuevo!</Text>

            <TextInput placeholder="Introduce tu correo electrónico" style={styles.input} />
            <TextInput placeholder="Introduce tu contraseña" style={styles.inputC} />

            <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonfinal} onPress={() => navigation.navigate('Registro')}>
                <Text style={styles.questionText}>
                    ¿No tienes una cuenta? <Text style={styles.registerText}>Regístrese ahora</Text>
                </Text>
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
        paddingTop: 70,
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
    },
    title3: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
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
    inputC: {
        width: '80%',
        height: 60,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 60,
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
    },
    buttonfinal: {
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 240,
        width: '80%',
        alignItems: 'center',
    },
});
