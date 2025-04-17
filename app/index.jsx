import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style ={styles.container}>

            <TouchableOpacity 
            style={styles.menuButton} 
            onPress={() => navigation.openDrawer()}
            >
                <Ionicons name="menu" size={24} color="#333" />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>Bem Vindo à Home!</Text>
                <Text style={styles.subtitle}>Aqui você encontra informações  iniciais.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        alignItems: "center",
    },
    menuButton: {
        padding: 20,
        alignSelf: "flex-start",
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
        width: "100%",
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color : "#666",
        marginTop: 5,
    }
});