import React, {useEffect} from 'react'
import Navigation from 'navigation'
import SplashScreen from 'react-native-splash-screen'
import {SafeAreaProvider} from 'react-native-safe-area-context'

const App = () => {
	useEffect(() => SplashScreen.hide(), [])

	return (
		<SafeAreaProvider>
			<Navigation />
		</SafeAreaProvider>
	)
}

export default App
