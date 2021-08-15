import Loader from 'components/Loader'
import React, {useEffect, useState} from 'react'
import {FlatList, SafeAreaView} from 'react-native'
import {useSelector} from 'react-redux'
import Picture from './Item'
import {fetchPictures, searchPictures, selectAll} from './PicturesSlice'
import {SearchBar} from 'react-native-elements'

import {listPictureStyle as styles} from './styles'
import {useDebounceSearch} from 'utilities/helper'
import PictureController from './PictureController'

const ListPicture = () => {
	const data = PictureController.data
	console.tron(data)
	const photos = useSelector(selectAll)
	const isLoading = false

	// const useSearching = () => useDebounceSearch((value) => dispatch(searchPictures(value)))

	// const {query, setQuery} = useSearching()

	if (isLoading && !photos.length) {
		return <Loader />
	}

	const renderItem = (item) => (
		<Picture url={item?.src?.large2x} photographerName={item?.photographer} />
	)

	return (
		<SafeAreaView style={styles.container}>
			<SearchBar
				placeholder='Type Here...'
				// onChangeText={setQuery}
				round
				// value={query}
				containerStyle={{backgroundColor: 'black'}}
			/>
			<FlatList
				data={photos}
				renderItem={({item}) => renderItem(item)}
				keyExtractor={(item) => item.id}
				numColumns={3}
				// onRefresh={handleFetchPictures}
				refreshing={isLoading}
				onEndReachedThreshold={0.95}
				// onEndReached={() => handleFetchPictures(page + 1)}
			/>
		</SafeAreaView>
	)
}

export default ListPicture
