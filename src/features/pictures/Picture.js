import React from 'react'
import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native'
import {pictureStyle as styles} from './styles'
import Icon from 'react-native-vector-icons/Entypo'
import CalendarModule from 'utilities/CalendarModule'

const Picture = ({url, photographerName, onPress}) => {
	return (
		<Pressable onPress={onPress}>
			<Image style={styles.image} source={{uri: url}} />
			<View style={styles.bottom}>
				<Text style={styles.photographerName}>@{photographerName}</Text>
				<TouchableOpacity>
					<Icon name='dots-three-horizontal' color='white' size={30} />
				</TouchableOpacity>
				<CalendarModule url={url} />
			</View>
		</Pressable>
	)
}

export default Picture
