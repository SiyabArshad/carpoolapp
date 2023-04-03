import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function LocationInput() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');

  const handleTextInputClick = async () => {
    setModalVisible(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let { coords } = await Location.getCurrentPositionAsync({});
    setLocation(coords);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleTextInputChange = (text) => {
    setTextInputValue(text);
  };

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputContainer} onPress={handleTextInputClick}>
        <Text style={styles.label}>Location:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your location"
          value={textInputValue}
          onChangeText={handleTextInputChange}
          editable={false}
        />
      </TouchableOpacity>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.modalInput}
            placeholder="Enter your location"
            value={textInputValue}
            onChangeText={handleTextInputChange}
          />
          <TouchableOpacity style={styles.modalButton} onPress={handleModalClose}>
            <Text style={styles.modalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});