import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default class FabButton extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.menu]}>
                        <Entypo name="menu" size={24} color="#fff" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        position: "absolute",
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
    },
    menu: {
        backgroundColor: "#ff9d00",
    },
});
