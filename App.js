import React from "react";
import { View, Text, StyleSheet} from "react-native";

const App = () =>
{
  return(
    <View>
      <Text>App Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
});

export default App;