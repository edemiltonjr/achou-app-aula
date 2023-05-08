import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        login: {
            padding: 30,
            flex: 1,
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

        formButton: {
            backgroundColor: "#070A52",
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            width: "100%"
        },

        textButton: {
            fontSize: 24,
            textAlign: "center",
            color: "#FFF"
        }
    }
);

export default styles