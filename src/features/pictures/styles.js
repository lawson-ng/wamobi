import {StyleSheet} from 'react-native'
import {screen} from 'utilities/constants'

export const pictureStyle = StyleSheet.create({
	image: {
		height: screen.height,
		width: screen.width,
	},
	container: {
		flex: 1,
	},
	photographerName: {
		color: 'white',
		fontFamily: 'BarlowCondensed-SemiBold',
		fontSize: 15,
		paddingVertical: 10,
		textAlign: 'center',
		letterSpacing: 2,
	},
	bottom: {
		backgroundColor: 'black',
		position: 'absolute',
		top: 0,
		opacity: 0.7,
		width: screen.width,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
	},
})

export const listPictureStyle = StyleSheet.create({
	container: {
		flex: 1,
	},
})
