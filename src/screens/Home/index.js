import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../Home/style';

export default function Home({ navigation }){
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateProduct')}
            >
                <Text style={styles.btnTextCreate}>+</Text>
            </TouchableOpacity>
        </View>
    );
}