import React, { useEffect, useState } from "react";
import {
    View,
    Modal,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import createConverter from "./converter.js";
import { AntDesign } from "@expo/vector-icons";

// import { Container } from './styles';

const Linhas = (stateLines) => {
    const converter = createConverter();
    var stateLine = stateLines.stateLines.stateLines;
    var lines = [];

    for (const lineId in stateLine) {
        const line = stateLine[lineId];
        for (const idaId in line.horarios.idas) {
            const ida = Number(line.horarios.idas[idaId]);
            if (ida) {
                line.horarios.idas[idaId] = converter.numberToHours(ida);
            }
        }
        for (const voltaId in line.horarios.voltas) {
            const volta = Number(line.horarios.voltas[voltaId]);
            if (volta) {
                line.horarios.voltas[voltaId] = converter.numberToHours(volta);
            }
        }
        if (Number(line.horarios.proxIda)) {
            line.horarios.proxIda = converter.numberToHours(
                line.horarios.proxIda
            );
        }
        if (Number(line.horarios.proxVolta)) {
            line.horarios.proxVolta = converter.numberToHours(
                line.horarios.proxVolta
            );
        }
        lines.push(line);
    }

    const renderState = lines.map((line) => {
        const [modalVisible, setModal] = useState(false);

        return (
            <TouchableHighlight
                underlayColor="#cc7e00"
                onPress={() => {
                    setModal(true);
                }}
                key={line.linha}
            >
                <LinearGradient
                    colors={["#fac97a", "#fcb23a", "#ff9d00"]}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderRadius: 10,
                        marginHorizontal: 20,
                        marginVertical: 10,
                        paddingVertical: 10,
                    }}
                >
                    <Text style={styles.linha}>{line.linha}</Text>
                    <Text style={styles.horarios}>
                        Próxima ída:{" "}
                        <Text style={styles.horario}>
                            {line.horarios.proxIda}
                        </Text>
                    </Text>
                    <Text style={styles.horarios}>
                        Próxima volta:{" "}
                        <Text style={styles.horario}>
                            {line.horarios.proxVolta}
                        </Text>
                    </Text>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModal(false);
                        }}
                    >
                        <View style={styles.modalLine}>
                            <View style={styles.modalContainer}>
                                <View style={styles.header}>
                                    <Text style={styles.appName}>
                                        Linha {line.linha}
                                    </Text>
                                </View>
                                <View style={styles.content}></View>
                            </View>
                            <TouchableHighlight
                                style={styles.closeBtn}
                                onPress={() => {
                                    setModal(false);
                                }}
                                underlayColor="#a1a1a1"
                            >
                                <AntDesign
                                    name="close"
                                    size={24}
                                    color="#393939"
                                />
                            </TouchableHighlight>
                        </View>
                    </Modal>
                </LinearGradient>
            </TouchableHighlight>
        );
    });

    return <View style={styles.container}>{renderState}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linha: {
        backgroundColor: "#fff",
        padding: 5,
        width: "20%",
        margin: 5,
        borderRadius: 20,
        textAlign: "center",
        fontSize: 20,
    },
    horarios: {
        color: "#fff",
        margin: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
    horario: {
        fontWeight: "100",
        color: "#fff",
        fontSize: 16,
    },
    modalLine: {
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

export default Linhas;
