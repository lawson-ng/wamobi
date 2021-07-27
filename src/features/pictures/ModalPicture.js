import React from 'react'
import {
	Modal,
	Image,
	View,
	StyleSheet,
	TouchableOpacity,
	StatusBar,
} from 'react-native'
import {screen} from 'utilities/constants'
import Icon from 'react-native-vector-icons/AntDesign'
const ModalPicture = ({isVisible, url, onClose}) => {
	console.log('Modal Picture')
	return (
		<Modal visible={isVisible} animationType='fade'>
			<StatusBar hidden />
			<View style={styles.container}>
				<Image style={styles.image} source={{uri: url}} />
				<TouchableOpacity onPress={onClose} style={styles.btnClose}>
					<Icon name='closecircleo' size={30} color='white' />
				</TouchableOpacity>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: screen.width,
		height: '100%',
	},
	btnClose: {
		position: 'absolute',
		alignSelf: 'flex-end',
		top: 10,
		right: 15,
	},
})
export default ModalPicture
