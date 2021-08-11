import {StyleSheet} from 'react-native'
import {screen} from 'utilities/constants'

const {width} = screen
export const pictureStyle = StyleSheet.create({
	container: {
		flex: 1,
		margin: 15,
		borderRadius: 15,
		backgroundColor: 'white',
		alignItems: 'center',
	},
	image: {
		width: 150,
		height: 250,
		margin: 10,
	},
	photographerName: {
		color: 'white',
		fontFamily: 'BarlowCondensed-SemiBold',
		fontSize: 15,
		letterSpacing: 3,
	},
	top: {
		backgroundColor: 'black',
		position: 'absolute',
		top: 0,
		opacity: 0.7,
		width,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
	},
	bottomContainer: {
		position: 'absolute',
		width,
		bottom: 0,
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingHorizontal: 15,
		alignItems: 'center',
	},
	btnBottomContainer: {},
	bottomBtn: {
		backgroundColor: 'white',
		borderRadius: 5,
	},
	bottomText: {
		color: 'black',
	},
})

export const listPictureStyle = StyleSheet.create({
	container: {
		flex: 1,
	},
})
