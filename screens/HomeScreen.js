import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';

export default function HomeScreen() {
  const [incubadoras, setIncubadoras] = useState([1]); // Lista de incubadoras
  const navigation = useNavigation();

  const agregarIncubadora = () => {
    setIncubadoras([...incubadoras, incubadoras.length + 1]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>EggSync</Text>
      </View>

      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <View style={styles.cardList}>
          {incubadoras.map((item) => (
            <TouchableOpacity key={item} style={styles.card} onPress={() => navigation.navigate('Incubator', { id: item })}>
              <Image source={require('../images/pollo-chico.jpg')} style={styles.icon} />
              <Text style={styles.cardText}>Incubadora {item}</Text>
              <Text style={styles.options}>⋮</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.floatingButton} onPress={agregarIncubadora}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
