import React from 'react'
import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import store from 'app/store'
import {PersistGate} from 'redux-persist/integration/react'
import App from 'app/App'

import {enableScreens} from 'react-native-screens'
import {Provider} from 'react-redux'
import {persistStore} from 'redux-persist'

// Optimize memory usage and performance
enableScreens()

let persistor = persistStore(store)

const Main = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	)
}

AppRegistry.registerComponent(appName, () => Main)
