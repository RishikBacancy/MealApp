import React, {useEffect} from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoriesMealsScreen = props =>
{

  const renderMealItems = itemData =>
  {
    return(
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
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
      />
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

export default CategoriesMealsScreen;