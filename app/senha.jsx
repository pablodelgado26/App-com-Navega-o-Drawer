import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';

const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-{}[]|:;<>?,.';

export default function GeradorSenha() {
  const [senha, setSenha] = useState('');

  const gerarSenha = (tamanho = 8) => {
    let novaSenha = '';
    for (let i = 0; i < tamanho; i++) {
      const index = Math.floor(Math.random() * caracteres.length);
      novaSenha += caracteres[index];
    }
    setSenha(novaSenha);
  };

  const copiarSenha = () => {
    if (senha) {
      Alert.alert('Copiado!', 'Senha copiada para a área de transferência.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de Senhas</Text>
      <Text style={styles.subtitle}>Aqui você pode gerar senhas de forma INFINITA para seu dia a dia!</Text>

      <TextInput style={styles.input} value={senha} editable={false} placeholder='Clique em "Gerar Senha" para exibir sua senha!'/>

      <TouchableOpacity style={styles.button} onPress={() => gerarSenha()}>
        <Text style={styles.buttonText}>🔐 Gerar Senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.copyButton} onPress={copiarSenha}>
        <Text style={styles.buttonText}>📋 Copiar Senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    alignItems: 'center', 
    justifyContent: 'center' 
},

  title: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20,
},

subtitle: {
    fontSize: 16, 
    marginBottom: 30,
    width: "70%"
},

  input: { 
    borderWidth: 1, 
    width: '80%', 
    padding: 10, 
    fontSize: 12, 
    borderRadius: 12, 
    marginBottom: 20,
    color: '#333',
},

  button: { 
    backgroundColor: '#333', 
    padding: 15, 
    borderRadius: 8, 
    marginBottom: 10, 
    width: '80%' 
},

  copyButton: { 
    backgroundColor: '#333', 
    padding: 15, 
    borderRadius: 8, 
    width: '80%' 
},

  buttonText: { 
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 16, 
},

});