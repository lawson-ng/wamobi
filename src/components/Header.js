import React from 'react'
import {Text, StyleSheet} from 'react-native'

const Header = (props) => {
	return <Text style={styles.title}>Wamobi</Text>
}

const styles = StyleSheet.create({
	title: {
		fontFamily: 'Satisfy-Regular',
		fontSize: 30,
		alignSelf: 'center',
		color: 'yellow',
		paddingVertical: 5,
	},
})

export default Header
