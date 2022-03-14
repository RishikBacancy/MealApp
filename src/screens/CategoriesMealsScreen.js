import React, {useEffect} from "react";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoriesMealsScreen = props =>
{
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
    <MealList listData={displayMeals} navigation={props.navigation}/>
  );
};

export default CategoriesMealsScreen;