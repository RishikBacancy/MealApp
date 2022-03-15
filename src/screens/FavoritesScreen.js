import React,  {useEffect} from "react";
import { Platform } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FavoritesScreen = props =>
{
  const favMeal = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");

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
    <MealList listData={favMeal} navigation={props.navigation}/>
  );
}

export default FavoritesScreen;