import CameraRoll from '@react-native-community/cameraroll'
import RNFetchBlob from 'rn-fetch-blob'

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
