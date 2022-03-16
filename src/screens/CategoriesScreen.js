import React, {useEffect} from "react";
import { FlatList, Platform} from "react-native";
import GridStyle from "../components/GridStyle";
import { CATEGORIES } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const CategoriesScreen = props =>
{
  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButton 
          iconType ="ios-menu"
          iconColor = {Platform.OS === "android" ? "white" : Colors.primaryColor}
          selectedBtn = {()=>{props.navigation.toggleDrawer()}}>
        </HeaderButton>
      ),
    });
  },[])

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

export default CategoriesScreen;