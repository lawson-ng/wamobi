import React from 'react'
import {NativeModules, TouchableOpacity, Text} from 'react-native'
const {WallpaperManager} = NativeModules

const constants = WallpaperManager.getConstants()
console.log('🚀 ~ file: CalendarModule.js ~ line 6 ~ constants', constants)

const NewModuleButton = ({url}) => {
	const onPress = async () => {
		try {
			const result = await WallpaperManager.setWallpaper(
				url,
				constants.FLAG_SYSTEM,
			)
			console.log(
				'🚀 ~ file: CalendarModule.js ~ line 12 ~ onPress ~ result',
				result,
			)
		} catch (error) {
			console.log(
				'🚀 ~ file: CalendarModule.js ~ line 11 ~ onPress ~ error',
				error.message,
			)
		}
	}

	return (
		<TouchableOpacity
			title='Click to invoke your native module!'
			color='#841584'
			onPress={onPress}>
			<Text>Some thing</Text>
		</TouchableOpacity>
	)
}

export default NewModuleButton
