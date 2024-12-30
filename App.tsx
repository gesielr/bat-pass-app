import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Clipboard, StatusBar, ToastAndroid, } from 'react-native';


export default function App() {
  const [password, setPassword] = useState<string>(''); // Estado para armazenar a senha gerada

  // Função para gerar uma senha aleatória
  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let newPassword = '';
    for (let i = 0; i < 10; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  // Função para copiar a senha para a área de transferência
  const copyToClipboard = () => {
    Clipboard.setString(password); // Copia a senha para a área de transferência
    ToastAndroid.show('Senha copiada', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.mainContainer}>
    <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      {/* Header com fundo cinza e linhas brancas */}
      <View style={styles.header}>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image source={require('./assets/pictures/bat-logo.png')} style={styles.logo} />
      </View>

      {/* Corpo principal */}
      <View style={styles.container}>
        {/* Campo para exibir a senha */}
        <TextInput
          style={styles.passwordInput}
          value={password}
          editable={false}
          placeholder="Generated Password"
          placeholderTextColor="#000000"
        />

        {/* Botão de gerar senha */}
        <TouchableOpacity style={styles.generateButton} onPress={generatePassword}>
          <Text style={styles.generateButtonText}>GENERATE</Text>
        </TouchableOpacity>

        {/* Botão de copiar senha */}
        <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
          <Text style={styles.copyButtonText}>⚡ COPY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    
  },
  header: {
    backgroundColor: '#808080', // Fundo cinza
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 2, // Linha branca no topo
    borderBottomWidth: 2, // Linha branca na parte inferior
    borderColor: '#FFFFFF',
    marginTop: 240, // Distância maior do topo
  },

  title: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: 190,
    height: 120,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  passwordInput: {
    backgroundColor: '#FFD700',
    color: '#000',
    width: '80%',
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 10,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  generateButton: {
    backgroundColor: '#000',
    width: '70%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  generateButtonText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
  copyButton: {
    backgroundColor: '#000',
    width: '70%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyButtonText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
