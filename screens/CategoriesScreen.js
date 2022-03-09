import React from "react";
import { View, Text, StyleSheet} from "react-native";

const CategoriesScreen = props =>
{
  return(
    <View style={styles.screen}>
      <Text style={styles.textWrap}>CategoriesScreen Screen</Text>
    </View>
  );
};

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

export default CategoriesScreen;