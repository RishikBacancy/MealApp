import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from "../screens/FiltersScreen";

const stackHeaderStyles = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
    headerTitleStyle: {
        fontFamily: 'JosefinSans-Bold'
    },
    headerBackTitleStyle:{
        fontFamily: 'JosefinSans-Bold'
    },
    presentation: 'modal'
}

const Stack = createNativeStackNavigator();

export const FavoriteNavigatr = () => {
    return(
        <Stack.Navigator
            screenOptions={
                stackHeaderStyles
            }>
            <Stack.Screen name="Favorites" component={FavoritesScreen}/>
            <Stack.Screen name="MealInfo" component={MealDetailsScreen}/>
        </Stack.Navigator>
    );
};

export const FilterNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={
                stackHeaderStyles
            }>
            
            <Stack.Screen name="Filters" component={FiltersScreen}/>

        </Stack.Navigator>
    );
};

const MealsNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={
				stackHeaderStyles
			}>

			<Stack.Screen name="Categories" component={CategoriesScreen} />
			<Stack.Screen name="CategoriesMeal" component={CategoriesMealsScreen} />
			<Stack.Screen name="MealDetails" component={MealDetailsScreen} />
		</Stack.Navigator>
	);
};

export default MealsNavigator;
