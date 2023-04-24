import { Text, TouchableOpacity, View } from 'react-native'

export default function Login({navigation}){
    return(
        <View>
            <Text>Login</Text>
            {/* Inputs usuário e senha */}
            <TouchableOpacity
                onPress={() => navigation.navigate('CreateUser')}
            >
                <Text>Cadastrar usuário</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('CreateProfessional')}
            >
                <Text>Cadastrar profissional</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Tabs')}
            >
                <Text>Navegação</Text>
            </TouchableOpacity>
        </View>
    );
}