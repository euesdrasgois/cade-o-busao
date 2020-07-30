import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import * as Location from "expo-location";
import io from "socket.io-client";

export default function App() {
  let setup = {
    linha: "377",
    horarios: {
      idas: [6, 9, 12, 16, 22],
      proxIda: 0,
      voltas: [7.5, 10.5, 13.5, 17.5, 23],
      proxVolta: 0,
    },
    coords: {
      latitude: -10.997099,
      longitude: -37.30666,
    },
  };
  const socket = io("http://10.0.0.104:5000");
  socket.on("connect", () => {
    socket.emit("bus-setup", setup);
  });
  socket.on("disconnect", () => {});

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          socket.disconnect();
        }}
      >
        <Text>Oi</Text>
      </TouchableHighlight>
      <StatusBar translucent={false} backgroundColor="#ececec" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
