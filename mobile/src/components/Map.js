import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

// import { Container } from './styles';

const Map = () => {
    return (
        <MapView
            style={styles.map}
            region={{
                latitude: -10.999584,
                longitude: -37.3125698,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134,
            }}
            showsUserLocation
        ></MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
});

export default Map;
