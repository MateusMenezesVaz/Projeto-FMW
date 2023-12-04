import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ImageBackground } from 'react-native';

export default function TelaAutenticacao({ navigation }) {
  const [estaRegistrando, setEstaRegistrando] = useState(false);
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const lidarComAutenticacao = () => {
    if (estaRegistrando) {
      if (
        nomeCompleto !== '' &&
        nomeUsuario !== '' &&
        email.match(/^\S+@\S+\.\S+$/) && // Valida o formato do email
        senha.length >= 8 &&
        senha === confirmarSenha
      ) {  
        alert('Registro bem-sucedido!');
        setEstaRegistrando(false);
      } else {
        alert('Por favor, preencha todos os campos corretamente.');
      }
    } else {
      if (nomeUsuario === 'mateus' && senha === 'mateus') {
        navigation.navigate('FMW');
      } else {
        alert('Nome de usuário ou senha incorretos!');
      }
    }
  };

  return (
    <ImageBackground
      source={require('../assets/FMWNATAL.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/FMW201.png')} 
          style={styles.logo}
        /> 
        {estaRegistrando && (
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            onChangeText={(text) => setNomeCompleto(text)}
            value={nomeCompleto}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
          onChangeText={(text) => setNomeUsuario(text)}
          value={nomeUsuario}
        />
        {estaRegistrando && (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(text) => setSenha(text)}
          value={senha}
        />
        {estaRegistrando && (
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            secureTextEntry
            onChangeText={(text) => setConfirmarSenha(text)}
            value={confirmarSenha}
          />
        )}
        <Button title={estaRegistrando ? 'Registrar' : 'Entrar'} onPress={lidarComAutenticacao} />
        <Text
          style={[styles.toggleText, { color: 'deepskyblue', fontSize: 20, fontWeight: 'bold' }]}
          onPress={() => setEstaRegistrando(!estaRegistrando)}
        >
          {estaRegistrando ? 'Já tem uma conta? Faça login aqui' : 'Não tem uma conta? Registre-se'}
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    marginLeft: 100,
    width: 300, 
    height: 100, 
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: '100%', 
    backgroundColor: 'white', 
  },
  toggleText: {
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
  },
});
