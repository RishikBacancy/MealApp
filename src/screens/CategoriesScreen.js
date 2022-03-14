import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import GridStyle from "../components/GridStyle";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = props =>
{

  const gridItems = (itemData) => 
  {
    return(
      <GridStyle
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={()=>{
          props.navigation.navigate("CategoriesMeal",
            itemData.item.id
          )
        }}/>
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
});

export default CategoriesScreen;