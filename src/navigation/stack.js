import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {ROUTES} from 'utilities/constants'
import PicturesScreen from 'features/pictures/ListPicture'
import PictureDetailScreen from 'features/pictures/PictureDetail'
const Stack = createStackNavigator()

export const HomeStack = () => (
	<Stack.Navigator>
		<Stack.Screen
			name={ROUTES.HOME.name}
			component={PicturesScreen}
			options={ROUTES.HOME.options}
		/>
		<Stack.Screen
			name={ROUTES.PICTURE_DETAIL.name}
			component={PictureDetailScreen}
			options={ROUTES.PICTURE_DETAIL.options}
		/>
	</Stack.Navigator>
)
