import {combineReducers, configureStore} from '@reduxjs/toolkit'
import picturesSlice from 'features/pictures/PicturesSlice'
import Reactotron from './ReactotronConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'

const rootReducer = combineReducers({
	pictures: picturesSlice,
})

const persistConfig = {
	key: 'root',
	version: 1,
	storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	enhancers: [Reactotron.createEnhancer()],
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export default store
