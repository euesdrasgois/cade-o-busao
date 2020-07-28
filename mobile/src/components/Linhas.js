import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import createConverter from "./converter.js";

// import { Container } from './styles';

const Linhas = (stateLines) => {
    const converter = createConverter();
    var stateLine = stateLines.stateLines.stateLines;
    var lines = [];

    for (const lineId in stateLine) {
        const line = stateLine[lineId];
        const proxIda = Number(line.horarios.proxIda);
        const proxVolta = Number(line.horarios.proxVolta);
        for (const idaId in line.horarios.idas) {
            const ida = Number(line.horarios.idas[idaId]);
            if (ida) {
                const _ida = converter.numberToHours(ida);
                line.horarios.idas[idaId] = _ida;
            }
        }
        for (const voltaId in line.horarios.voltas) {
            const volta = Number(line.horarios.voltas[voltaId]);
            if (volta) {
                const _volta = converter.numberToHours(volta);
                line.horarios.voltas[voltaId] = _volta;
            }
        }
        if (proxIda) {
            const _proxIda = converter.numberToHours(proxIda);
            line.horarios.proxIda = _proxIda;
        }

        if (proxVolta) {
            const _proxVolta = converter.numberToHours(proxVolta);
            line.horarios.proxVolta = _proxVolta;
        }

        lines.push(line);
    }

    const renderState = lines.map((line) => {
        return (
            <LinearGradient
                key={line.key}
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
                    <Text style={styles.horario}>{line.horarios.proxIda}</Text>
                </Text>
                <Text style={styles.horarios}>
                    Próxima volta:{" "}
                    <Text style={styles.horario}>
                        {line.horarios.proxVolta}
                    </Text>
                </Text>
            </LinearGradient>
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
});

export default Linhas;
