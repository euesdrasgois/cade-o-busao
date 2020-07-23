import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const FabButton = () => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <Animated.View style={styles.button}>
                    <Entypo name="menu" size={24} color="#fff" />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        position: "absolute",
        top: 10,
        left: 10,
    },
    button: {
        position: "absolute",
        elevation: 5,
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        justifyContent: "center",
        alignItems: "center",
        shadowRadius: 10,
        shadowColor: "#00213B",
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10,
        },
        backgroundColor: "#ff9d00",
    },
});

export default FabButton;
