import React, {useEffect} from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import MealItemStyle from "../components/MealItemStyle";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoriesMealsScreen = props =>
{

  const renderMealItems = itemData =>
  {
    return(
      <MealItemStyle
        title = {itemData.item.title}
        duration = {itemData.item.duration}
        complexity = {itemData.item.complexity}
        affordability = {itemData.item.affordability}
        image = {itemData.item.imageUrl}
        onSelectMeal = {()=>{
          props.navigation.navigate("MealDetails",
            itemData.item.id);
        }}
      />
    );
  };

  const categoryId = props.route.params;

  const selectedCat = CATEGORIES.find(data => data.id === categoryId);
  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >=0
  );

  useEffect( () => {
    props.navigation.setOptions({
      title: selectedCat.title
    });
  },[selectedCat])

  return(
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item,index) => item.id}
        renderItem={renderMealItems}
        style={{width:"100%"}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:10,
  },
  textWrap:{
    fontFamily:"JosefinSans-Regular",
    fontSize:18,
  },
});

export default CategoriesMealsScreen;