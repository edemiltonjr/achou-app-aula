import { TextInput, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react';
import styles from './style';

export default function Login({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErroLogin] = useState(null);

    const validate = () => {

    }

    return (
        <View style={styles.login}>

            <Image style={styles.logo} source={require('../../../assets/logo_achou_white.png')} />

            {errorLogin != null &&
                <Text style={styles.alert}>{errorLogin}</Text>
            }

            <TextInput
                style={styles.formInput}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.formInput}
                secureTextEntry={true}
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity
                style={styles.formButton}
                onPress={validate}
            >
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateUser')}>
                <Text style={styles.btnCreateText}>Criar Usuário</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateProfessional')}>
                <Text style={styles.btnCreateText}>Criar Profissional</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Tabs')}>
                <Text style={styles.btnCreateText}>Navegação</Text>
            </TouchableOpacity>
        </View>
    );
}