import React, {useEffect} from "react";
import { View, Text, StyleSheet} from "react-native";
import HeaderButton from "../components/HeaderButton";

const FiltersScreen = props =>
{
  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButton 
          iconType ="ios-menu"
          iconColor = {Platform.OS === "android" ? "white" : Colors.primaryColor}
          selectedBtn = {()=>{props.navigation.toggleDrawer()}}>
        </HeaderButton>
      ),
    });
  },[])

  return(
    <View style={styles.screen}>
      <Text style={styles.textWrap}>FiltersScreen Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  textWrap:{
    fontFamily:"JosefinSans-Regular",
    fontSize:18,
  },
});

export default FiltersScreen;