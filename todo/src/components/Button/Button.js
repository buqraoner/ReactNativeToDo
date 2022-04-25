import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./Button.style";


const Button = ({ onPress, text }) => {
    return (

        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}


export default Button;