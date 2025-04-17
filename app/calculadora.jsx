import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Calculadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Insira dois números válidos');
      return;
    }

    let res = 0;
    switch (operacao) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n2 !== 0 ? n1 / n2 : 'Erro: divisão por zero';
        break;
    }

    setResultado(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Simples</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <View style={styles.botoes}>
        <Button title="+" onPress={() => calcular('+')} />
        <Button title="-" onPress={() => calcular('-')} />
        <Button title="×" onPress={() => calcular('*')} />
        <Button title="÷" onPress={() => calcular('/')} />
      </View>
      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center' 
},

  titulo: {
     fontSize: 24, 
     fontWeight: 'bold', 
     marginBottom: 20, 
     textAlign: 'center' 
    },

  input: { 
    borderWidth: 1, 
    padding: 10, 
    marginVertical: 10, 
    borderRadius: 5 
},

  botoes: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginVertical: 20, 
},

  resultado: { 
    fontSize: 20, 
    textAlign: 'center', 
    marginTop: 20 
},

});
