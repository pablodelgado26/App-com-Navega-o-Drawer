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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f4f4f4",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    counter: {
      fontSize: 50,
      fontWeight: "bold",
      color: "#007AFF",
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: "row",
      gap: 10,
    },
    button: {
      backgroundColor: "#007AFF",
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    decrementButton: {
      backgroundColor: "#FFA500",
    },
    resetButton: {
      backgroundColor: "#FF3B30",
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
  });