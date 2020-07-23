import React, { Component, useState } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated,
    Modal,
    Text,
    TouchableHighlight,
    Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function FabSaida() {
    const [modalVisible, setModal] = useState(false);
    return (
        <View style={styles.container}>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModal(false);
                    }}
                >
                    <View style={styles.modal}></View>
                </Modal>
            </View>
            <View style={styles.drawer}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        setModal(true);
                    }}
                >
                    <View>
                        <AntDesign name="up" size={24} color="#fff" />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawer: {
        backgroundColor: "#ff9d00",
        position: "absolute",
        width: "100%",
        padding: 15,
        bottom: 0,
        alignItems: "center",
    },
    modal: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 300,
        backgroundColor: "#999",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});
