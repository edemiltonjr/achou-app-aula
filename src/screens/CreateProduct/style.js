import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: "center",
        justifyContent: "center"
    },

    alert: {
        fontSize: 18,
        textAlign: "center",
        color: "#F60",
        marginBottom: 20
    },

    formInput: {
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: "#DDD",
        padding: 20,
        marginBottom: 20,
        width: "100%"
    },

    formBtn: {
        backgroundColor: "#070A52",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        width: "100%"
    },

    textBtn: {
        color: "#FFF",
        fontSize: 24,
        textAlign: "center"
    },
});

export default styles