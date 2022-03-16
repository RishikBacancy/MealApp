import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAV } from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) =>
{
    switch(action.type) {
        case TOGGLE_FAV:
            
            const existIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            console.log("=========== "+existIndex+" ===========");
            if(existIndex >= 0) {
                const updatedFavMeal = [...state.favoriteMeals];
                console.log(updatedFavMeal);
                updatedFavMeal.splice(existIndex,1);
                console.log(updatedFavMeal);
                return { ...state, favoriteMeals:updatedFavMeal};
            } else {
                const favMeal = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(favMeal)};
            }

        default:
            return state;
    }
};

export default mealsReducer;