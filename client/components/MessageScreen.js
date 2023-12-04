import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, StyleSheet, Text, Button } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MessageScreen() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    carregarItens();
  }, []);

  const carregarItens = () => {
    axios.get('http://192.168.0.9:3001/itens')
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const adicionarItem = () => {
    axios.post('http://192.168.0.9:3001/item', { item: message })
      .then((response) => {
        setMessage('');
        carregarItens();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletarItem = (id) => {
    axios.delete(`http://192.168.0.9:3001/item/${id}`)
      .then((response) => {
        carregarItens();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{item.itens}</Text>
      <TouchableOpacity onPress={() => deletarItem(item.id)}>
        <Icon name="trash" size={20} color="#FF0000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.messagesList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem"
          onChangeText={(text) => setMessage(text)}
          value={message}
        />
        <Button title="Enviar" onPress={adicionarItem} color="#007BFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  messagesList: {
    flex: 1,
    width: '100%',
  },
  messageContainer: {
    backgroundColor: '#eee',
    borderRadius: 4,
    marginBottom: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 16,
  },
});




