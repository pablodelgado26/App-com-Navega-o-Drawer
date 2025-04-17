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
                <Text style={styles.title}>Bem Vindo ao nosso app!</Text>
                <Text style={styles.subtitle}>Aqui você encontra ferramentas para seu uso diário</Text>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    menuButton: {
        position: "absolute",
        top: 40,
        left: 20,
        zIndex: 1,
    },
    content: {
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#000",
    },
    subtitle: {
        fontSize: 16,
        color: "#000",
        marginTop: 10,
    }
});