import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";



const Input = ({ onChangeText, placeHolder, value }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder={placeHolder}
                value={value}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,


    },
    input: {
        fontSize: 20,
    },

});


export default Input;
