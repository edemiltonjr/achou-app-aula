import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from './src/screens/Login/';
import CreateUser from './src/screens/CreateUser/';
import CreateProduct from './src/screens/CreateProduct/';
import Home from './src/screens/Home/';
import Favorites from './src/screens/Favorites/';
import Account from './src/screens/Account/';
import AboutApp from './src/screens/AboutApp/';
import { MaterialIcons } from "@expo/vector-icons"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#F60' }, //Cor de de fundo do topo
                    headerTintColor: '#FFF', // Cor da fonte no topo
                    headerTitleAlign: 'center' // Alinhamento do texto
                }}
            >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Cadastro de Usuário' }} />
                <Stack.Screen name="CreateProduct" component={CreateProduct} options={{ title: 'Cadastro de produto' }} />
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Tabs() {
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;
                    if(route.name == "Início"){
                        iconName = "home";
                    }else if(route.name == "Favoritos"){
                        iconName = "favorite";
                    }else if (route.name == "Sobre"){
                        iconName = "info";
                    }else if(route.name == "Conta"){
                        iconName = "account-circle";
                    }
                    return <MaterialIcons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: "#FFF", //Cor de ícones ativos
                tabBarInactiveTintColor: "#F60", //Cor de ícones inativos
                tabBarStyle: {backgroundColor: "#070A52"}, //Cor de fund da Tab Navigator
                headerShow: true, // Exibição do cabecalho da página interna
                headerTintColor: "#FFF", //Cor do texto do topo
                headerTitleAlign: "center", //alinhamento do texto do topo
                headerStyle: {backgroundColor: '#F60'} //Cor de fundo do topo
            })}
        >
            <Tab.Screen name="Início" component={Home}/>
            <Tab.Screen name="Favoritos" component={Favorites}/>
            <Tab.Screen name="Conta" component={Account}/>
            <Tab.Screen name="Sobre" component={AboutApp}/>
        </Tab.Navigator>
    );
}

