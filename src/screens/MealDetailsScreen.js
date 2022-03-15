import React, { useEffect } from 'react';
import { ScrollView, Image, View, Text, StyleSheet, Platform } from 'react-native';
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import DefaultText from '../components/DefaultText';

const ListDetail = props =>
{
  return(
    <View style={styles.listDetailContainer}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen = props => {
	const mealId = props.route.params;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	useEffect(
		() => {
			props.navigation.setOptions({
				title: selectedMeal.title,
				headerRight: () => (
					<HeaderButton
						iconType="heart"
						iconColor={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
						selectedBtn={() => console.log('btn Pressed!')}
					/>
				)
			});
		},
		[ selectedMeal ]
	);

	return (
		<ScrollView>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.imgContainer} />
			<View style={styles.detailsContainer}>
				<DefaultText>{selectedMeal.duration}m</DefaultText>
				<DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
				<DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
			</View>
      <Text style={styles.titleContainer}>Ingredients</Text>
      
      {selectedMeal.ingredients.map(ingredient=>
        <ListDetail key={ingredient}>{ingredient}</ListDetail>
      )}
     
      <Text style={styles.titleContainer}>Steps</Text>

      {selectedMeal.steps.map(step=>
        <ListDetail key={step}>{step}</ListDetail>
      )}

		</ScrollView>
	);
};

const styles = StyleSheet.create({
	imgContainer:{
    width:"100%",
    height:200,
  },
  detailsContainer:{
    flexDirection:"row",
    padding:15,
    justifyContent:"space-around",
  },
  titleContainer:{
    fontFamily:"JosefinSans-Bold",
    fontSize:20,
    textAlign:"center",
  },
  listDetailContainer:{
    marginVertical:10,
    marginHorizontal:20,
    borderColor:"#ccc",
    borderWidth:1,
    padding:10,
  },
});

export default MealDetailsScreen;
