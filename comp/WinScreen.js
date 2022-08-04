import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";


function WinScreen({ TextWin, WinVisible, Close }) {
    return (
        <Modal
            visible={WinVisible}
            transparent={true}
            animationType="fade"
        >
            <View style={estilos.modal}>
                <View style={estilos.bg}>
                    <Text style={estilos.text}>{TextWin}</Text>
                </View>

                <TouchableOpacity style={estilos.button} onPress={() => { Close(false) }}>
                    <Text style={estilos.txtbutton}>OK</Text>
                </TouchableOpacity>

            </View>
        </Modal>
    )

}

const estilos = StyleSheet.create({
    modal: {
        backgroundColor: "#0004",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg: {
        backgroundColor: '#FFA500',
        height: 100,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200
    },
    text: {
        color: "#000d",
        fontSize: 30,
        marginBottom: 5
    },
    button: {
        backgroundColor: "#F00",
        height: 30,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        transform: [{ translateY: -15 }]
    },
    txtbutton: {
        color: "#FFF"
    }
})

export default WinScreen