import React, {useEffect} from "react";
import { View, Text, StyleSheet, Platform} from "react-native";
import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const MealDetailsScreen = props =>
{

  const mealId = props.route.params;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  useEffect(() => {
    props.navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <HeaderButton 
          iconType ="heart"
          iconColor = {Platform.OS === "android" ? "white" : Colors.primaryColor}
          selectedBtn = {()=> (console.log("btn Pressed!"))}>
        </HeaderButton>
      ),
    });
  },[selectedMeal])

  return(
    <View style={styles.screen}>
      <Text style={styles.textWrap}>{selectedMeal.title}</Text>
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

export default MealDetailsScreen;