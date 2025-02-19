import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { Ionicons } from '@expo/vector-icons';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Incubadora'>;

export default function IncubatorScreen() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#24589e" />
        </TouchableOpacity>
        <Text style={styles.title}>Configuración y controles</Text>
      </View>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Incubadora')}>
        <View style={styles.section}>
          <View style={styles.circle}>
            <Ionicons name="egg" size={40} color="#24589e" />
          </View>
          <View style={styles.separator}>
            <Text style={styles.optionText}>Estado Incubadora</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Lcd')}>
        <View style={styles.section}>
          <View style={styles.circle}>
            <Ionicons name="cog" size={40} color="#24589e" />
          </View>
          <View style={styles.separator}>
            <Text style={styles.optionText}>Configuración LCD</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Notificaciones')}>
        <View style={styles.section}>
          <View style={styles.circle}>
            <Ionicons name="notifications-outline" size={40} color="#24589e" />
          </View>
          <View style={styles.separator}>
            <Text style={styles.optionText}>Notificaciones</Text>
          </View>
        </View>
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
  circle: {
    width: 50,
    height: 50,
    borderRadius: 75,
    backgroundColor: '#F0D637',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  section: {
    marginBottom: 8,
    backgroundColor: '#f8f9fa',
    padding: 2,
    borderRadius: 10,
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  separator: {
    marginLeft: 15,
  },
});
