import React,  {useEffect} from "react";
import { Platform } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FavoritesScreen = props =>
{

  const favMeal = useSelector(state => state.meals.favoriteMeals);

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