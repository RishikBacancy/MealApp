import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
				},
				headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
				headerTitleStyle: {
					fontFamily: 'JosefinSans-Bold'
				},
				presentation: 'modal'
			}}>
                
			<Stack.Screen name="Categories" component={CategoriesScreen} />
			<Stack.Screen name="CategoriesMeal" component={CategoriesMealsScreen} />
			<Stack.Screen name="MealDetails" component={MealDetailsScreen} />
		</Stack.Navigator>
	);
};

export default MealsNavigator;
