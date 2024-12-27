import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import pagina1Screen from "../screens/Pagina1Screen";
import pagina2Screen from "../screens/Pagina2Screen";
import Pagina3Screens from "../screens/Pagina3Screen";
import Pagina4Screens from "../screens/Pagina4Screens";
import Calculadora from "../screens/Calculadora";
import Temperatura from "../screens/Temperatura";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer Navigator
function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Welcome ♥" component={WelcomeScreen} />
            <Drawer.Screen name="Registro ✍🏻" component={pagina1Screen} />
            <Drawer.Screen name="Json 📉" component={pagina2Screen} />
            <Drawer.Screen name="Crash 🎮" component={Pagina3Screens} />
            <Drawer.Screen name="Musica 🎧" component={Pagina4Screens} />
            <Drawer.Screen name="Calculadora 🔢" component={Calculadora} />
            <Drawer.Screen name="Temperatura🌡️" component={Temperatura} />
        </Drawer.Navigator>
    );
}

// Stack Navigator
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Welcome" 
                component={WelcomeScreen} 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Drawer" 
                component={MyDrawer} 
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    );
}

// Main Navigator
export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
