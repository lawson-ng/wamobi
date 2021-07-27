import React, {useEffect, useState} from 'react'
import {
	View,
	Text,
	FlatList,
	Modal,
	Touchable,
	TouchableOpacity,
	Image,
	SafeAreaView,
	StatusBar,
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {screen} from 'utilities/constants'
import ModalPicture from './ModalPicture'
import Picture from './Picture'
import {fetchPictures, selectAll} from './PicturesSlice'

import {listPictureStyle as styles} from './styles'
const ListPicture = () => {
	const dispatch = useDispatch()
	const photos = useSelector(selectAll)
	const [selectedUrl, setSelectedUrl] = useState(null)
	const handleFetchPictures = () => {
		console.log('List Picture')
		dispatch(fetchPictures())
	}

	// useEffect(() => handleFetchPictures(), [])

	const renderItem = (item) => (
		<Picture
			onPress={() => setSelectedUrl(item.src.large)}
			url={item.src.large2x}
			photographerName={item.photographer}
		/>
	)

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar hidden />
			<FlatList
				data={photos}
				renderItem={({item}) => renderItem(item)}
				keyExtractor={(item) => item.id}
				snapToAlignment={'start'}
				snapToInterval={screen.height}
				decelerationRate={'fast'}
			/>
		</SafeAreaView>
	)
}

export default ListPicture
