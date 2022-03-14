import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MealsNavigator, { FavoriteNavigatr } from "./MealsNavigator";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator();

const TabNavigator = () =>
{
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    headerShown:false,
                    tabBarActiveTintColor: Colors.primaryColor,
                    tabBarInactiveTintColor: "gray",
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if(route.name === "Meals") {
                            iconName = focused ? "restaurant" : "restaurant-outline";
                        } else if (route.name === "Favorite") {
                            iconName = focused ? "heart" : "heart-outline";
                        }
                        return <Icon name={iconName} size={size} color={color}/>
                    }
                })}>
                <Tab.Screen name="Meals" component={MealsNavigator}/>
                <Tab.Screen name="Favorite" component={FavoriteNavigatr}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigator;