import {useRoute} from '@react-navigation/native'
import React from 'react'
import {View, StatusBar, StyleSheet, Image} from 'react-native'
import {screen} from 'utilities/constants'

const PictureDetailScreen = () => {
	const route = useRoute()
	const {url} = route.params

	if (!url) {
		return null
	}

	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<Image source={{uri: url}} style={styles.image} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {flex: 1, backgroundColor: 'black'},
	image: {
		height: screen.height,
		width: screen.width,
	},
})

export default PictureDetailScreen
