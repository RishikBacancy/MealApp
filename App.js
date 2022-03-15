import React from "react";
import { enableScreens } from "react-native-screens";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import TabNavigator from "./src/navigation/TabNavigator";

enableScreens();

const App = () =>
{
  return(
    <DrawerNavigation/>
  );
};

export default App;