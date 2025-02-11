import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles';

export default function IncubatorScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params; // Obtiene el ID de la incubadora

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Incubadora {id}</Text>
      <Text style={{ fontSize: 18 }}>Aquí puedes gestionar la incubadora {id}.</Text>

      <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.goBack()}>
        <Text style={styles.floatingButtonText}>←</Text>
      </TouchableOpacity>
    </View>
  );
}
