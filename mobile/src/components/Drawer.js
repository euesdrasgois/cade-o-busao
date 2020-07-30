import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Modal,
    Text,
    TouchableHighlight,
    ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Linhas from "./Linhas";

export default function Drawer(stateLines) {
    const [modalVisible, setModal] = useState(false);
    const [stateLine, setState] = useState();

    useEffect(() => {
        if (!modalVisible) {
            setState(stateLines);
        }
    });

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModal(false);
                }}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.header}>
                            <Text style={styles.appName}>Cadê o Busão?</Text>
                        </View>
                        <ScrollView style={styles.content}>
                            <Linhas stateLines={stateLine} />
                        </ScrollView>
                    </View>
                    <TouchableHighlight
                        style={styles.closeBtn}
                        onPress={() => {
                            setModal(false);
                        }}
                        underlayColor="#a1a1a1"
                    >
                        <AntDesign name="close" size={24} color="#393939" />
                    </TouchableHighlight>
                </View>
            </Modal>
            <TouchableHighlight
                style={styles.drawer}
                onPress={() => {
                    setModal(true);
                }}
                underlayColor="#cc7e00"
            >
                <View>
                    <AntDesign name="up" size={24} color="#fff" />
                </View>
            </TouchableHighlight>
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
        height: "70%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    closeBtn: {
        position: "absolute",
        padding: 10,
        borderRadius: 32,
        right: 0,
        marginTop: 5,
        marginRight: 5,
        backgroundColor: "#fff",
    },
    modalContainer: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        marginRight: 20,
        padding: 5,
    },
    appName: {
        fontSize: 36,
        fontWeight: "bold",
    },
    content: {
        borderTopWidth: 2,
    },
});
