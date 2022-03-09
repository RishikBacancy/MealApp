import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = props =>
{

  const gridItems = (itemData) => 
  {
    return(
      <TouchableOpacity
        onPress={()=>{props.navigation.navigate("CategoriesMeal")}}
        style={styles.gridItem}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return(
    <FlatList 
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={gridItems}
      numColumns={2}/>
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
  gridItem:{
    flex:1,
    margin:15,
    height:150,
  }, 
});

export default CategoriesScreen;