'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    customFont: {
        // fontFamily: 'Roboto-Regular',
    },
    llGreenButton:{
        backgroundColor : '#40524C',
        color: "white",
        padding: 10,
        borderRadius: 4,
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    disabledButton: {
        backgroundColor : '#eeeeee',
        color: "gray",
    },
    llGreenInput:{
        borderColor : '#40524C',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: 'stretch',
    }
});