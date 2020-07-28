import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import FabButton from "./src/components/FabButton";
import Drawer from "./src/components/Drawer";
import Map from "./src/components/Map";
import io from "socket.io-client";

export default function App() {
    const [stateLines, setStateLines] = useState([]);
    useEffect(() => {
        const socket = io("http://132.255.194.205:5000");
        socket.on("setup", (lines) => {
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
