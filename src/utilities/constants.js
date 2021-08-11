import {Dimensions} from 'react-native'

export const screen = Dimensions.get('window')

export const ROUTES = {
	HOME: {
		name: 'home',
		options: {
			title: 'Home',
			headerShown: false,
		},
	},
	SIGNIN: {
		name: 'signin',
		options: {
			title: 'Sign In',
		},
	},
	SIGNUP: {
		name: 'signup',
		options: {
			title: 'Sign Up',
		},
	},
}
