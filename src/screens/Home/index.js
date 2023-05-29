import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from '../Home/style';
import firebase from '../../config/firebase';
import { getFirestore, collection, orderBy, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
const db = getFirestore(firebase)
import { MaterialIcons } from '@expo/vector-icons'

export default function Home({ navigation }) {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const q = query(collection(db, "products"), orderBy("data_registro","desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const products = [];
            querySnapshot.forEach((doc) => {
                products.push({...doc.data(), id: doc.id});
                // console.log(doc.data())
            });
            setProduct(products)
        });
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={product}
                renderItem={({item}) =>
                    <View>
                        <View>
                            <Text>{item.descricao}</Text>
                            <Text>R$ {item.valor}</Text>
                        </View>
                    </View>
                }
            />

            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateProduct')}
            >
                <Text style={styles.btnTextCreate}>+</Text>
            </TouchableOpacity>
        </View>
    );
}