import React, {useEffect} from "react";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";

const CategoriesMealsScreen = props =>
{
  const categoryId = props.route.params;

  const displayingMeals = useSelector(state => state.meals.filteredMeals);

  const selectedCat = CATEGORIES.find(data => data.id === categoryId);

  const displayMeals = displayingMeals.filter(
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