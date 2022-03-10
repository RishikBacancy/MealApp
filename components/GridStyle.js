import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from "react-native";

const GridStyle = props =>
{
    let TouchableComponent = TouchableOpacity;

    if(Platform.OS === "android" && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return(
        <View style={styles.gridItem}>
            <TouchableComponent
                style={{flex:1}}
                onPress={props.onSelect}>
                <View style={{...styles.textContainer,...{backgroundColor:props.color}}}>
                    <Text style={styles.textWrap} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        borderRadius:10,
        overflow:"hidden",
    },
    textContainer:{
        flex:1,
        borderRadius:10,
        shadowColor:"black",
        shadowOpacity:0.26,
        shadowOffset:{width:0, height:2},
        shadowRadius:10,
        elevation:8,
        padding: 15,
        justifyContent: "flex-end",
        alignItems:"flex-end",
    },
    textWrap:{
        fontFamily:"JosefinSans-Regular",
        fontSize: 22,
        textAlign:"right",
    }, 
});

export default GridStyle;