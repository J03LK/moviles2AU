import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import pagina1Screen from "../screens/Pagina1Screen";
import pagina2Screen from "../screens/Pagina2Screen";
import Pagina3Screens from "../screens/Pagina3Screen";
import Pagina4Screens from "../screens/Pagina4Screens";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerLeft: () => null 
            }}
        >
            <Drawer.Screen name="Pagina1" component={pagina1Screen} />
            <Drawer.Screen name="Pagina2" component={pagina2Screen} />
            <Drawer.Screen name="Pagina3" component={Pagina3Screens} />
            <Drawer.Screen name="Pagina4" component={Pagina4Screens} />
        </Drawer.Navigator>
    );
}

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Ventana" 
                component={WelcomeScreen} 
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Bottom" 
                component={MyDrawer}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}