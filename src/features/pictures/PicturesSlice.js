import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit'
import API from 'utilities/api'

const pictureAdapter = createEntityAdapter()

const initialState = pictureAdapter.getInitialState({
	isLoading: false,
})

export const fetchPictures = createAsyncThunk(
	'pictures/fetchPictures',
	async () => {
		const getPictures = await API.get('curated')
		return getPictures.photos
	},
)

const pictureSlice = createSlice({
	name: 'pictureSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPictures.fulfilled, pictureAdapter.addMany)
	},
})

const {reducer} = pictureSlice

const picturesSelector = pictureAdapter.getSelectors((state) => state.pictures)

export const {selectAll} = picturesSelector

export default reducer
