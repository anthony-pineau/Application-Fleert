import { CurrentRenderContext } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';


const styles = {
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderBottomColor: '#A6A6A6',
        fontSize: 15,
        color: 'black',
        width: '70%',
        textAlign: 'center',
    },
    container: {
        marginTop: 50,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    titleRegister: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom:'10%',
    },
    buttonRegister: {
        backgroundColor: '#FF5D5D',
        borderRadius: 50,
        width: '80%',
        paddingVertical: 15,
        marginTop: '20%',
    },
    buttonRegisterText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
};

export default styles;
