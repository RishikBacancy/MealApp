import React from "react";
import { enableScreens } from "react-native-screens";
import TabNavigator from "./src/navigation/TabNavigator";

enableScreens();

const App = () =>
{
  return(
    <TabNavigator/>
  );
};

export default App;