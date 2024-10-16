import React from 'react';
import { ImageBackground,StyleSheet,View,Image, Text } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={10}
            style={styles.background}
            source={require("../assets/background.jpg")}>
            <View style={styles.logoTextContainer}>
                <Image style={styles.logo} source={require("../assets/logo.jpg")}/>
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={()=> console.log("Login tapped")}></AppButton>
                <AppButton title="Register" onPress={()=> console.log("Register tapped")} color='secondary'></AppButton>
            </View>    
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    buttonsContainer:{
        padding:20,
        width:"100%"
    },
    logo:{
        width:100,
        height:100,
        borderRadius:20,
    },
    logoTextContainer:{
        position:'absolute',
        top:"10%",
        alignItems:"center",
    },
    tagline:{
        fontSize:25,
        fontWeight:"600",
        paddingVertical:20,
    }
})

export default WelcomeScreen;