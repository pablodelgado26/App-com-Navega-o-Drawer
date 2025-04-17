import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
         
            <TouchableOpacity 
                style={styles.menuButton} 
                onPress={() => navigation.openDrawer()}
            >
                <Ionicons name="menu" size={34} color="#fff" />
            </TouchableOpacity>

     
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <Ionicons name="cube" size={50} color="#fff" />
                </View>
                
                <Text style={styles.title}>Bem-vindo ao nosso app!</Text>
                <Text style={styles.subtitle}>Aqui você encontra ferramentas essenciais para seu dia a dia</Text>
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.openDrawer()} 
                >
                    <Text style={styles.buttonText}>Abrir Menu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000CB5",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    menuButton: {
        position: "absolute",
        top: 50,
        left: 20,
        zIndex: 1,
    },
    content: {
        alignItems: "center",
        width: '100%',
    },
    logoContainer: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#fff",
        textAlign: 'center',
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 16,
        color: "rgba(255,255,255,0.9)",
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 24,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: '600',
    }
});