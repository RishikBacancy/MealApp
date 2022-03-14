import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealItemStyle from './MealItemStyle';

const MealList = props => 
{
	const renderMealItems = (itemData) => {
		return (
			<MealItemStyle
				title={itemData.item.title}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				image={itemData.item.imageUrl}
				onSelectMeal={() => {
					props.navigation.navigate('MealDetails', itemData.item.id);
				}}
			/>
		);
	};

	return (
		<View style={styles.list}>
			<FlatList
				data={props.listData}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItems}
				style={{ width: '100%' }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	}
});

export default MealList;
