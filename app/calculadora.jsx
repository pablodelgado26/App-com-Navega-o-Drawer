import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default function Calculadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operacao, setOperacao] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Erro');
      return;
    }

    let res = 0;
    switch (operacao) {
      case '+': res = n1 + n2; break;
      case '-': res = n1 - n2; break;
      case '*': res = n1 * n2; break;
      case '/': res = n2 !== 0 ? n1 / n2 : 'Erro'; break;
      default: res = 'Operação inválida';
    }

    setResultado(res.toString());
  };

  const limpar = () => {
    setNum1('');
    setNum2('');
    setOperacao('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>

      <TextInput
        style={styles.input}
        placeholder="Primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.row}>
        <TouchableOpacity style={styles.botao} onPress={() => setOperacao('+')}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => setOperacao('-')}>
          <Text style={styles.botaoTexto}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => setOperacao('*')}>
          <Text style={styles.botaoTexto}>×</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => setOperacao('/')}>
          <Text style={styles.botaoTexto}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.botao, styles.calcular]} onPress={calcular}>
          <Text style={styles.botaoTexto}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, styles.limpar]} onPress={limpar}>
          <Text style={styles.botaoTexto}>C</Text>
        </TouchableOpacity>
      </View>

      {resultado !== '' && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f0f0f0' },
  titulo: { fontSize: 28, textAlign: 'center', marginBottom: 20, fontWeight: 'bold' },
  input: {
    backgroundColor: '#ffff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  botao: {
    flex: 1,
    backgroundColor: "#000CB5",
    marginHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  calcular: { 
    backgroundColor: "#000CB5"
},
  limpar: { 
   backgroundColor: "#000CB5"
},

  resultado: {
    marginTop: 30,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
});