import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {reactotronRedux} from 'reactotron-redux'

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
	.configure() // controls connection & communication settings
	.use(reactotronRedux())
	.useReactNative() // add all built-in react native plugins
	.connect() // let's c

export default reactotron
