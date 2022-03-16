import React from 'react';
import { View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderButton = props => 
{
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

export default HeaderButton;