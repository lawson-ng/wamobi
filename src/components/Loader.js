import React from 'react'
import {View, ActivityIndicator} from 'react-native'

const Loader = () => {
	return (
		<View style={{flex: 1, justifyContent: 'center'}}>
			<ActivityIndicator color='blue' size='large' />
		</View>
	)
}

export default Loader
