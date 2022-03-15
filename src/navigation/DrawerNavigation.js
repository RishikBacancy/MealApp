import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import { FilterNavigator } from './MealsNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
	return (
		<NavigationContainer>
		<Drawer.Navigator 
		screenOptions={{
			headerShown:false,
		}}>
			<Drawer.Screen name="MealFav" component={TabNavigator} />
			<Drawer.Screen name="Filter" component={FilterNavigator} />
		</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default DrawerNavigation;
