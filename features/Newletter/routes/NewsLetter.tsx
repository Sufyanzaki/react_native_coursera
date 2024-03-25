import {Image, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";
import useNewsLetterForm from "../hooks/useNewsLetterForm";

export default function NewsLetter(){
    const globalStyles = require('../../../styles/globalStyles.ts');
    const {formik} = useNewsLetterForm();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/little-lemon-logo-grey.png')}
                style={styles.mainLogo}
                resizeMode='contain'
            />
            <Text style={styles.text}>Subscribe to our newsletter for our latest delicious recipes!</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={globalStyles.llGreenInput}
                    placeholder='Type your email'
                    onChangeText={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    value={formik.values.email}
                    keyboardType="email-address"
                />
                {formik.errors.email &&
                    <Text style={styles.error}>{formik.errors.email}</Text>
                }
            </View>
            <Pressable style={{alignSelf: 'stretch'}} onPress={() => formik.handleSubmit()} disabled={!formik.isValid}>
                <Text style={[globalStyles.llGreenButton ,!formik.isValid && globalStyles.disabledButton]}>{formik.isSubmitting ? 'Subscribing...' : 'Subscribe'}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        gap: 20
    },
    inputContainer:{
        marginTop: 40,
      alignSelf: "stretch"
    },
    error: {
        fontSize: 10,
        color: 'red',
        alignSelf: "stretch",
        textAlign: "left",
        marginTop: 10
    },
    mainLogo: {
        width: 100,
        height: 100,
        marginTop: 40,
    },
    text: {
        marginTop: 40,
        fontSize: 16,
        textAlign: "center",
        marginHorizontal: "auto",
    }
})