import { View, Text, StyleSheet, } from "react-native"

export default function ContadorScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador</Text>
            <Text style={styles.subtitle}>faça o contador aqui</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        marginTop: 10,
    }
})