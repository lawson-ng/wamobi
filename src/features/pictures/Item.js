import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import {pictureStyle as styles} from './styles'
import {useNavigation} from '@react-navigation/native'
import {ROUTES} from 'utilities/constants'

const Picture = ({url, onPress}) => {
	const navigation = useNavigation()

	const goToPictureDetail = () => {
		const params = {url}
		return navigation.navigate(ROUTES.PICTURE_DETAIL.name, params)
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={goToPictureDetail} style={styles.wrapper}>
				<Image style={styles.image} resizeMode='cover' source={{uri: url}} />
			</TouchableOpacity>
		</View>
	)
}

export default Picture
