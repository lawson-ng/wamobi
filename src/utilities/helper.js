import CameraRoll from '@react-native-community/cameraroll'
import {useEffect, useRef, useState} from 'react'
// import RNFetchBlob from 'rn-fetch-blob'

import {Client} from 'rollbar-react-native'
export const rollbar = new Client('6157529f0206498b862be5e3b08f6b2c')

export const RESULT_SAVE_IMAGE = {
	SUCCESS: 200,
}

export const saveImageToCameraRoll = async (url = '') => {
	const extension = url.split('.').slice(-1)[0].split('?')[0]

	const pathPicture = RNFetchBlob.fs.dirs.PictureDir

	return RNFetchBlob.config({
		path: pathPicture + '/wamobi.' + extension,
	})
		.fetch('GET', url)
		.then((res) => {
			const path = res.path()
			return CameraRoll.save(path)
		})
		.then((result) => result && 200)
		.catch((error) => error)
}

export const useDebounceSearch = (func = () => {}, timeout = 2000) => {
	const timer = useRef(null)
	const [query, setQuery] = useState('')
	useEffect(() => {
		clearTimeout(timer.current)
		if (query) {
			timer.current = setTimeout(() => func.apply(null, [query]), timeout)
		}
	}, [query])
	return {
		query,
		setQuery,
	}
}
