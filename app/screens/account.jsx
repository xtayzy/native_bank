import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

export default function Account() {
    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState("");

    const topUp = () => {
        const numericAmount = parseFloat(amount);
        if (!isNaN(numericAmount) && numericAmount > 0) {
            setBalance(balance + numericAmount);
            setAmount("");
        } else {
            alert("По-братски, пиши ровно");
        }
    };

    const Withdraw  = () => {
        const numericAmount = parseFloat(amount);
        if (!isNaN(numericAmount) && numericAmount > 0) {
            if (numericAmount <= balance) {
                setBalance(balance - numericAmount);
                setAmount("");
            } else {
                alert("С бабками напряг");
            }
        } else {
            alert("По-братски, пиши ровно");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Кошель</Text>
            <Text style={styles.balance}>Что на счету по факту: {balance} ₽</Text>

            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Вкидывай сумму"
                value={amount}
                onChangeText={setAmount}
            />

            <View style={styles.buttonContainer}>
                <Button title="Вкинуть" onPress={topUp} color="#bcbcbc"/>
                <Button title="Сдернуть" onPress={Withdraw} color="#A1A1A1FF"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20,
        backgroundColor: "#ffffff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    balance: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        height: 40,
        borderColor: "#d1d1d1",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
