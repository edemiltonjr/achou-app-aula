import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './src/screens/Login/';
import CreateUser from './src/screens/CreateUser/';
import CreateProfessional from './src/screens/CreateProfessional/';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="CreateUser" component={CreateUser} />
                <Stack.Screen name="CreateProfessional" component={CreateProfessional} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}