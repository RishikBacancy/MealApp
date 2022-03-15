import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Platform,
	TouchableNativeFeedback,
	ImageBackground
} from 'react-native';
import DefaultText from './DefaultText';

const MealItemStyle = (props) => {
	let TouchableComponent = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableComponent = TouchableNativeFeedback;
	}

	return (
		<View style={styles.mealItemContainer}>
			<TouchableComponent onPress={props.onSelectMeal}>
				<View>
					<View style={{ ...styles.rowItems, ...styles.headerMeal }}>
                        <ImageBackground source={{uri: props.image}}
                            style={styles.bgImage}>    
                            <View style={styles.titleContainer}>
						    <Text style={styles.titleText}
                                numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
					</View>
					<View style={{ ...styles.rowItems, ...styles.detailMeal }}>
						<DefaultText>{props.duration}m</DefaultText>
						<DefaultText>{props.complexity.toUpperCase()}</DefaultText>
						<DefaultText>{props.affordability.toUpperCase()}</DefaultText>
					</View>
				</View>
			</TouchableComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItemContainer: {
		height: 200,
		width: '100%',
		backgroundColor: '#f5f5f5',
        borderRadius:10,
        overflow:"hidden",
	},
	rowItems: {
		flexDirection: 'row'
	},
    titleContainer:{
        backgroundColor:"rgba(0,0,0,0.5)",
        paddingVertical:7,
        paddingHorizontal:12, 
    },
    titleText:{
        fontFamily:"JosefinSans-Bold",
        fontSize:20,
        color:"white",
    },
	headerMeal: {
		height:"85%"
	},
	detailMeal: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
        alignItems:"center",
        height:"15%"
	},
    bgImage:{
        width:"100%",
        height:"100%",
        justifyContent:"flex-end",
    }
});

export default MealItemStyle;
