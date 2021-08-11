import Loader from 'components/Loader'
import React, {useEffect, useState} from 'react'
import {FlatList, SafeAreaView, StatusBar} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import Picture from './Picture'
import {
	fetchPictures,
	selectAll,
	selectIsLoading,
	selectPage,
} from './PicturesSlice'

import {listPictureStyle as styles} from './styles'
const ListPicture = () => {
	const dispatch = useDispatch()
	const photos = useSelector(selectAll)
	const page = useSelector(selectPage)

	const isLoading = useSelector(selectIsLoading)

	const handleFetchPictures = (nextPage = page) => {
		dispatch(fetchPictures({nextPage}))
	}

	useEffect(() => handleFetchPictures(), [])

	if (isLoading && !photos.length) {
		return <Loader />
	}

	const renderItem = (item) => (
		<Picture url={item?.src?.large2x} photographerName={item?.photographer} />
	)

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar hidden />
			<FlatList
				data={photos}
				renderItem={({item}) => renderItem(item)}
				keyExtractor={(item) => item.id}
				// snapToAlignment={'start'}
				// snapToInterval={screen.height}
				// decelerationRate={'fast'}
				numColumns={2}
				onRefresh={handleFetchPictures}
				refreshing={isLoading}
				onEndReachedThreshold={0.8}
				onEndReached={() => handleFetchPictures(page + 1)}
			/>
		</SafeAreaView>
	)
}

export default ListPicture
