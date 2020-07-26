import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

// import { Container } from './styles';

const Map = (stateLines) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [longitude, setLng] = useState(-37.3125698);
    const [latitude, setLat] = useState(-10.999584);
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setLat(Number(JSON.stringify(location.coords.latitude)));
            setLng(Number(JSON.stringify(location.coords.longitude)));
        })();
    }, []);
    useEffect(() => {
        setBuses(stateLines.stateLines);
    }, [stateLines]);

    const markers = buses.map((bus) => {
        return (
            <Marker key={bus.key} coordinate={bus.coords}>
                <Image
                    style={{ width: 60, height: 60 }}
                    source={require("./../images/bus.png")}
                />
            </Marker>
        );
    });

    return (
        <MapView
            style={styles.map}
            region={{
                latitude,
                longitude,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134,
            }}
            showsUserLocation
        >
            {markers}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
});

export default Map;
