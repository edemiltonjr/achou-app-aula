import { Text, TouchableOpacity, View } from 'react-native'

export default function Login(){
    return(
        <View>
            <Text>Login</Text>
            {/* Inputs usuário e senha */}
            <TouchableOpacity>
                <Text>Cadastrar usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Cadastrar profissional</Text>
            </TouchableOpacity>
        </View>
    );
}