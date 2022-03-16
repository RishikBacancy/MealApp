import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Platform, Switch } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.label}</Text>
			<Switch
				trackColor={{ true: Colors.primaryColor }}
				thumbColor={Platform.OS === 'android' ? Colors.primaryColor : 'white'}
				value={props.state}
				onValueChange={props.onChange}
			/>
		</View>
	);
};

const FiltersScreen = props => 
{

	const [ isGlutenFree, setIsGlutenFree ] = useState(false);
	const [ isLectosFree, setIsLectosFree ] = useState(false);
	const [ isVeg, setIsVeg ] = useState(false);
	const [ isVegan, setIsVegan ] = useState(false);

	/*const saveFilters = useCallback(
		() => {
			const appliedFilters = {
				glutenFree: isGlutenFree,
				lectosFree: isLectosFree,
				veg: isVeg,
				vegan: isVegan
			};

			console.log(appliedFilters);
		},
		[ isGlutenFree, isLectosFree, isVeg, isVegan ]
	);

	props.navigation.setParams({
		save: saveFilters,
	});*/

	useEffect(() => {

		props.navigation.setOptions({
			headerLeft: () => (
				<HeaderButton
					iconType="ios-menu"
					iconColor={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
					selectedBtn={() => {
						props.navigation.toggleDrawer();
					}}
				/>
			),
			headerRight: () => (
				<HeaderButton
					iconType="ios-save"
					iconColor={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
					selectedBtn={()=>{console.log("Presses!")}}
				/>
			)
		});

	}, []);

	return (
		<View style={styles.screen}>
			<Text style={styles.textWrap}>Available Filters/ Restrictions</Text>
			<FilterSwitch label="Gluten Free" state={isGlutenFree} onChange={(newValue) => setIsGlutenFree(newValue)} />

			<FilterSwitch label="Lectos Free" state={isLectosFree} onChange={(newValue) => setIsLectosFree(newValue)} />

			<FilterSwitch label="Vegetarian" state={isVeg} onChange={(newValue) => setIsVeg(newValue)} />

			<FilterSwitch label="Vegan" state={isVegan} onChange={(newValue) => setIsVegan(newValue)} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center'
	},
	textWrap: {
		fontFamily: 'JosefinSans-Regular',
		fontSize: 18,
		margin: 20,
		textAlign: 'center'
	},
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
		marginVertical: 5
	}
});

export default FiltersScreen;
