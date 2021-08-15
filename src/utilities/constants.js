import React from 'react'
import {Dimensions} from 'react-native'
import Header from 'components/Header'
export const screen = Dimensions.get('window')

export const ROUTES = {
	HOME: {
		name: 'home',
		options: {
			headerTitle: (props) => <Header {...props} />,
			headerStyle: {
				backgroundColor: 'black',
			},
			// title: 'Home',
			// headerShown: false,
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
	PICTURE_DETAIL: {
		name: 'picture_detail',
		options: {
			title: 'Picture Detail',
			headerShown: false,
		},
	},
}
