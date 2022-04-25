import React from "react";
import { View, Text, StyleSheet } from "react-native";



const Header = () => {
    return (
        <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderText}>
                TODO LIST
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    HeaderContainer: {
        backgroundColor: "darkslategrey",
        justifyContent: "center",
        alignItems: "center",
        height: 85,
    },
    HeaderText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
    },

});



export default Header;
