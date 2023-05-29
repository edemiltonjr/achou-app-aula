import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },

    produto: {
        backgroundColor: "#FFF",
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    descricao: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    valor: {
        fontSize: 18,
        color: "#F60"
    },

    btnCreate: {
        backgroundColor: '#F60',
        width: 60,
        height: 60,
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },

    btnTextCreate: {
        fontSize: 24,
        textAlign: 'center',
        color: '#FFF'
    }
});

export default styles