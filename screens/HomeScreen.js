import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';

export default function HomeScreen() {
  const [incubadoras, setIncubadoras] = useState([{ id: 1, name: 'Incubadora 1' }]);
  const [selectedIncubadora, setSelectedIncubadora] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const navigation = useNavigation();

  const agregarIncubadora = () => {
    const newId = incubadoras.length + 1;
    setIncubadoras([...incubadoras, { id: newId, name: `Incubadora ${newId}` }]);
  };

  const openModal = (incubadora) => {
    setSelectedIncubadora(incubadora);
    setNewName(incubadora.name);
    setModalVisible(true);
  };

  const cambiarNombre = () => {
    setIncubadoras(incubadoras.map(item => 
      item.id === selectedIncubadora.id ? { ...item, name: newName } : item
    ));
    setModalVisible(false);
  };

  const eliminarIncubadora = () => {
    setIncubadoras(incubadoras.filter(item => item.id !== selectedIncubadora.id));
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>EggSync</Text>
      </View>

      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <View style={styles.cardList}>
          {incubadoras.map((item) => (
            <View key={item.id} style={styles.card}>
              <TouchableOpacity style={styles.cardTouchable} onPress={() => navigation.navigate('Incubator', { id: item.id })}>
                <Image source={require('../images/pollo-chico.jpg')} style={styles.icon} />
                <Text style={styles.cardText}>{item.name}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionsButton} onPress={() => openModal(item)}>
                <Ionicons name="ellipsis-vertical-outline" size={24} color="#24589e" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.floatingButton} onPress={agregarIncubadora}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Incubadora</Text>
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
              placeholder="Nuevo nombre"
            />
            <TouchableOpacity style={styles.modalButton} onPress={cambiarNombre}>
              <Text style={styles.modalButtonText}>Cambiar Nombre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalButton, { backgroundColor: '#d9534f' }]} onPress={eliminarIncubadora}>
              <Text style={styles.modalButtonText}>Eliminar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
