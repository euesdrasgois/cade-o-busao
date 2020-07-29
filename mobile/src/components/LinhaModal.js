import React, { useState, useEffect } from "react";
import { View, Modal, Text } from "react-native";

// import { Container } from './styles';

const LinhaModal = (visible, line) => {
    const [modalVisible, setModal] = useState(false);
    useEffect(() => {
        setModal(visible);
    }, []);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModal(false);
            }}
        >
            <View>
                <Text>Oi</Text>
            </View>
        </Modal>
    );
};

export default LinhaModal;
