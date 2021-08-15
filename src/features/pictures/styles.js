import {StyleSheet} from 'react-native'
import {screen} from 'utilities/constants'

const {width} = screen

export const pictureStyle = StyleSheet.create({
	container: {
		flex: 4,
		margin: 5,
		alignItems: 'center',
	},
	wrapper: {
		backgroundColor: 'white',
		padding: 5,
		borderRadius: 5,
	},
	image: {
		borderRadius: 5,
		width: 100,
		height: 150,
		backgroundColor: 'white',
	},
})

export const listPictureStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
})
