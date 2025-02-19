import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import styles from '../styles';

type Incubadora = {
  _id: string;
  name: string;
};

export default function HomeScreen() {
  const [incubadoras, setIncubadoras] = useState<Incubadora[]>([]);
  const [selectedIncubadora, setSelectedIncubadora] = useState<Incubadora | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>('');
  const navigation = useNavigation<any>();

  useEffect(() => {
    const fetchIncubadoras = async () => {
      try {
        const response = await axios.get('http://192.168.161.78:3000/api/incubadoras');
        setIncubadoras(response.data);
      } catch (error) {
        console.error('Error al obtener las incubadoras:', error);
      }
    };

    fetchIncubadoras();
  }, []);

  const agregarIncubadora = async () => {
    try {
      const response = await axios.post('http://192.168.161.78:3000/api/incubadoras', {
        name: `Incubadora ${incubadoras.length + 1}`,
      });
      setIncubadoras([...incubadoras, response.data]);
    } catch (error) {
      console.error('Error al agregar la incubadora:', error);
    }
  };

  const openModal = (incubadora: Incubadora) => {
    setSelectedIncubadora(incubadora);
    setNewName(incubadora.name);
    setModalVisible(true);
  };

  const cambiarNombre = async () => {
    if (!selectedIncubadora) return;

    try {
      const response = await axios.put(`http://192.168.161.78:3000/api/incubadoras/${selectedIncubadora._id}`, {
        name: newName,
      });
      setIncubadoras(incubadoras.map(item => 
        item._id === selectedIncubadora._id ? response.data : item
      ));
      setModalVisible(false);
    } catch (error) {
      console.error('Error al actualizar la incubadora:', error);
    }
  };

  const eliminarIncubadora = async () => {
    if (!selectedIncubadora) return;

    try {
      await axios.delete(`http://192.168.161.78:3000/api/incubadoras/${selectedIncubadora._id}`);
      setIncubadoras(incubadoras.filter(item => item._id !== selectedIncubadora._id));
      setModalVisible(false);
    } catch (error) {
      console.error('Error al eliminar la incubadora:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>EggSync</Text>
      </View>

      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <View style={styles.cardList}>
          {incubadoras.map((item) => (
            <View key={item._id} style={styles.card}>
              <TouchableOpacity style={styles.cardTouchable} onPress={() => navigation.navigate('Incubator', { id: item._id })}>
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