import CameraRoll from '@react-native-community/cameraroll'
import RNFetchBlob from 'rn-fetch-blob'

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
