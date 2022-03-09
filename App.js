import React from "react";
import { View, Text, StyleSheet} from "react-native";

const App = () =>
{
  return(
    <View style={styles.screen}>
      <Text style={styles.textWrap}>App Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  textWrap:{
    fontFamily:"JosefinSans-Regular",
    fontSize:18,
  },
});

export default App;