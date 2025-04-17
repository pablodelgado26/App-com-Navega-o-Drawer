import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const frases = [
    "Acredite em si mesmo e tudo será possível.",
    "Cada dia é uma nova oportunidade para recomeçar.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "A persistência é o caminho do êxito.",
    "Seja a mudança que você quer ver no mundo.",
    "O essencial é invisível para os olhos.",
    "A vida é 10%, o que acontece com você é 90% como você reage.",
];

export default function ContadorScreen() {
    const [fraseAtual, setFraseAtual] = useState(frases[0]);

    function mudarFrase() {
        const novaFrase = frases[Math.floor(Math.random() * frases.length)];
        setFraseAtual(novaFrase);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Frase do Dia</Text>
            <Text style={styles.subtitle}>{fraseAtual}</Text>
            <Pressable onPress={mudarFrase} style={styles.button}>
                <Text style={styles.buttonText}>Mudar Frase</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f4f8",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        color: "#555",
        textAlign: "center",
        marginBottom: 30,
        paddingHorizontal: 20,
        lineHeight: 24,
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});