import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import Colors from "../constants/Colors";

const Stack = createNativeStackNavigator();

const MealsNavigator = () =>
{
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor: Colors.primaryColor,
                    },
                    headerTintColor:"#fff",
                    headerTitleStyle:{
                        fontFamily: "JosefinSans-Bold"
                    }
                }}>
                <Stack.Screen 
                    name="Categories" 
                    component={CategoriesScreen}/>
                <Stack.Screen 
                    name="CategoriesMeal" 
                    component={CategoriesMealsScreen}/>
                <Stack.Screen
                    name="MealDetails"
                    component={MealDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MealsNavigator;