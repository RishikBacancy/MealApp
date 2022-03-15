import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = (props) => {
	return <Text style={styles.textWrap}>{props.children}</Text>;
};

const styles = StyleSheet.create({
	textWrap: {
		fontFamily: 'JosefinSans-Regular'
	}
});

export default DefaultText;
