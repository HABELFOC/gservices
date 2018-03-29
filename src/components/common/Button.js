import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children, textStyle, borderStyle}) => {

	return(
		<TouchableOpacity
		onPress={onPress}
		style={[styles.buttonStyle, borderStyle]}
		>
			<Text style={[styles.buttonTextStyle, textStyle]}>
				{children}
			</Text>
		</TouchableOpacity>
	);

};


const styles = {
	buttonStyle: {
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},
	buttonTextStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
};


export {Button};