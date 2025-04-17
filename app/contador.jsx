import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador Simples</Text>
      <Text style={styles.counter}>{contador}</Text>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => setContador(contador + 1)}>
          <Text style={styles.buttonText}>+1</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.decrementButton]} onPress={() => setContador(contador - 1)}>
          <Text style={styles.buttonText}>-1</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.resetButton]} onPress={() => setContador(0)}>
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}
