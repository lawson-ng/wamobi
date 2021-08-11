import React from 'react'
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native'
import {pictureStyle as styles} from './styles'
import Icon from 'react-native-vector-icons/Entypo'
import WallpaperManager, {TYPE} from 'react-native-wallpaper-manage'
import {saveImageToCameraRoll, RESULT_SAVE_IMAGE} from 'utilities/helper'

const Picture = ({url, photographerName}) => {
	const setWallpaper = async () => {
		try {
			const result = await WallpaperManager.setWallpaper(url, TYPE.FLAG_SYSTEM)
			if (result) {
				Alert.alert('Notification', 'Successfully')
			}
		} catch (error) {
			console.log(error)
		}
	}

	const saveImage = async () => {
		const result = await saveImageToCameraRoll(url)
		if (result === RESULT_SAVE_IMAGE.SUCCESS) {
			Alert.alert('Notification', 'The image is saved!')
		}
	}

	return (
		<View style={styles.container}>
			<Image style={styles.image} resizeMode='cover' source={{uri: url}} />

			{/* <Text style={styles.photographerName}>@{photographerName}</Text>

			<View style={styles.btnBottomContainer}>
				<TouchableOpacity onPress={saveImage}>
					<Icon name='download' color='black' size={20} />
				</TouchableOpacity>
				<TouchableOpacity onPress={setWallpaper}>
					<Text style={styles.bottomText}>Set as wallpaper</Text>
				</TouchableOpacity>
			</View> */}
		</View>
	)
}

export default Picture
