import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import { FilterNavigator } from './MealsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Colors from '../constants/Colors';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				screenOptions={{
					headerShown: false,
					drawerActiveTintColor: Colors.primaryColor,
					drawerInactiveTintColor: "gray",
					drawerLabelStyle:{
						fontFamily: 'JosefinSans-Bold'
					}
				}}
			>
				<Drawer.Screen name="Meal" component={TabNavigator} />
				<Drawer.Screen name="Filter" component={FilterNavigator} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default DrawerNavigation;
