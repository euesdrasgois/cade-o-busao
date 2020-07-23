import React, { useState } from "react";
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

export default function FabSaida() {
    const [modalVisible, setModal] = useState(false);

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
                            <View style={styles.headerTextBox}>
                                <Text style={styles.headerText1}>Chegada</Text>
                            </View>
                            <View style={styles.headerTextBox}>
                                <Text style={styles.headerText1}>Linha</Text>
                            </View>
                            <View style={styles.headerTextBox}>
                                <Text style={styles.headerText1}>Saída</Text>
                            </View>
                        </View>
                        <ScrollView style={styles.content}>
                            <Linhas />
                        </ScrollView>
                    </View>
                    <TouchableHighlight
                        style={styles.closeBtn}
                        onPress={() => {
                            setModal(false);
                        }}
                        underlayColor="#a1a1a1"
                    >
                        <AntDesign name="close" size={24} color="#fff" />
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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    closeBtn: {
        position: "absolute",
        padding: 10,
        borderRadius: 32,
        right: 0,
        marginTop: 5,
        marginRight: 5,
        backgroundColor: "#e0e0e0",
    },
    modalContainer: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        borderBottomWidth: 2,
        marginRight: 20,
    },
    headerTextBox: {
        flex: 1,
        alignItems: "center",
    },
    headerText1: {
        fontSize: 25,
        margin: 15,
        color: "#000",
    },
    headerText2: {
        fontSize: 35,
        margin: 15,
        color: "#ff9d00",
    },
});
