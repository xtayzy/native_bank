import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Profile() {
    const user = {
        name: "Михаил",
        surname: "Зубенко",
        otchestvo: "Петрович",
        email: "email@example.com",
        phone: "все семерки",
        id: 77777,
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.text}>Name: {user.name}</Text>
                <Text style={styles.text}>Surname: {user.surname}</Text>
                <Text style={styles.text}>Otchestvo: {user.otchestvo}</Text>
                <Text style={styles.text}>Email: {user.email}</Text>
                <Text style={styles.text}>Phone: {user.phone}</Text>
                <Text style={styles.text}>User ID: {user.id}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f4f4f4",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    infoContainer: {
        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 10,
        display: "flex",
        gap: 10
    },
    text: {
        fontSize: 16,
    },
});
