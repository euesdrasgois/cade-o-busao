import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import FabButton from "./src/components/FabButton";
import Drawer from "./src/components/Drawer";
import Map from "./src/components/Map";
import io from "socket.io-client";

export default function App() {
    const [stateLines, setStateLines] = useState([]);
    function getTime() {
        const time = new Date();
        const hour = time.getHours();
        const minute = time.getMinutes() / 60;
        return hour + minute;
    }
    useEffect(() => {
        const socket = io("http://10.0.0.104:5000");
        socket.on("setup", (lines) => {
            for (const lineId in lines) {
                var idas = [];
                var voltas = [];
                const line = lines[lineId];
                for (const idaId in line.horarios.idas) {
                    const ida = Number(line.horarios.idas[idaId]);
                    const timeNow = getTime();
                    if (ida * 60 - timeNow * 60 >= 0 && ida) {
                        idas.push(ida);
                    }
                    line.horarios.proxIda = idas[0];
                }
                for (const voltaId in line.horarios.voltas) {
                    const volta = Number(line.horarios.voltas[voltaId]);
                    const timeNow = getTime();
                    if (volta * 60 - timeNow * 60 >= 0 && volta) {
                        voltas.push(volta);
                    }
                    line.horarios.proxVolta = voltas[0];
                }
            }
            setStateLines(lines);
        });
    }, []);

    return (
        <View style={styles.container}>
            <FabButton />
            <Map stateLines={stateLines} />
            <Drawer stateLines={stateLines} />
            <StatusBar translucent={false} backgroundColor="#ececec" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
