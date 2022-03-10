import React from 'react';
import { Text, StyleSheet, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

const HeaderButton = (props) => {
	return (
		<View>
			<Icon 
                onPress={props.selectedBtn} 
                name={props.iconType} 
                size={23} 
                color={props.iconColor}
                />
		</View>
	);
};

const styles = StyleSheet.create({});

export default HeaderButton;
