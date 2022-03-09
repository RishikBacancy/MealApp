import React from "react";
import { View, Text, StyleSheet} from "react-native";

const CategoriesMealsScreen = props =>
{
  return(
    <View style={styles.screen}>
      <Text style={styles.textWrap}>CategoriesMealsScreen Screen</Text>
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

export default CategoriesMealsScreen;