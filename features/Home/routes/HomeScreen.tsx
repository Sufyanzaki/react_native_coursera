import React from "react";
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import {RootStackParamList} from "../../../types/globalTypes";

type HomeNavigationProps = {
    navigation: NavigationProp<RootStackParamList, 'Welcome'>;
};

export default function HomeScreen({navigation} : HomeNavigationProps){
    const globalStyles = require('../../../styles/globalStyles')

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image
                    source={require('../../../assets/little-lemon-logo.png')}
                    style={styles.mainLogo}
                    resizeMode='contain'
                />
                <Text style={[styles.text, globalStyles.customFont]}>Little Lemon, Your local Mediterranean Bistro</Text>
            </View>
            <View style={styles.btnContainer}>
                <Pressable style={globalStyles.customFont} onPress={() => navigation.navigate('Newsletter')}>
                    <Text style={globalStyles.llGreenButton}>Newsletter</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#eaeaea',
    },
    subContainer: {
        flex: 0.85,
        justifyContent: "center",
        alignItems: "center",
        gap: 30
    },
    mainLogo: {
        width: 200,
        height: 200
    },
    text: {
        fontWeight: '500',
        textAlign: "center",
        marginHorizontal: "auto",
        fontSize: 18,
        width: 250
    },
    btnContainer:{
        flex: 0.15,
        justifyContent:"flex-end",
    }
})