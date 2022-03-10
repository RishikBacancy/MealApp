import React from "react";
import { View, Text, StyleSheet} from "react-native";
import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";

enableScreens();

const App = () =>
{
  return(
    <MealsNavigator/>
  );
}

export default App;