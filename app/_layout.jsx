import { Drawer } from "expo-router/drawer";
import IonIcons from "react-native-vector-icons/Ionicons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: "Início",
                    title: "Home",
                    headerShown: false,
                    headerLeft: true,
                    drawerIcon: ({ size, color }) => (
                        <IonIcons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="contador"
                options={{
                    drawerLabel: "Contador",
                    title: "Contador",
                    drawerIcon: ({ size, color }) => (
                        <IonIcons name="server-outline" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="calculadora"
                options={{
                    drawerLabel: "Calculadora",
                    title: "calculadora",
                    drawerIcon: ({ size, color }) => (
                        <IonIcons name="calculator" size={size} color={color} />
                    ),
                }}
            />
                <Drawer.Screen
                    name="frases"
                    options={{
                        drawerLabel: "Frases",
                        title: "Frases",
                        drawerIcon: ({ size, color }) => (
                            <IonIcons name="today" size={size} color={color} />
                        ),
                    }}
                />
        </Drawer>
    </GestureHandlerRootView>
);
}
