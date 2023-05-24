import {
	createAsyncThunk,
	createEntityAdapter,
	createSelector,
	createSlice,
} from '@reduxjs/toolkit'
import API from 'utilities/api'

const perPage = 30

const pictureAdapter = createEntityAdapter()

const initialState = pictureAdapter.getInitialState({
	isLoading: false,
	page: 1,
})

export const fetchPictures = createAsyncThunk(
	'pictures/fetchPictures',
	async (params = {}) => {
		const {nextPage = 1} = params
		const response = await API.get('curate2d', {
			params: {
				page: nextPage,
				per_page: perPage,
			},
		})
		return {data: response.photos, page: nextPage}
	},
)

export const searchPictures = createAsyncThunk(
	'pictures/searchPictures',
	async (query = '') => {
		const response = await API.get('search', {
			params: {
				query,
			},
		})

		return {data: response.photos}
	},
)

const pictureSlice = createSlice({
	name: 'pictureSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPictures.fulfilled, (state, action) => {
			const {data, page} = action.payload
			state.isLoading = false

			if (page > state.page) {
				state.page = page
				pictureAdapter.addMany(state, data)
			} else {
				pictureAdapter.setAll(state, data)
			}
		})
		builder.addCase(fetchPictures.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(fetchPictures.rejected, (state) => {
			state.isLoading = false
		})
		builder.addCase(searchPictures.fulfilled, (state, action) => {
			const {data} = action.payload
			pictureAdapter.setAll(state, data)
		})
	},
})

const {reducer} = pictureSlice

const selectPicturesState = (state) => state.pictures
const picturesSelector = pictureAdapter.getSelectors(selectPicturesState)

export const {selectAll} = picturesSelector

export const selectIsLoading = createSelector(
	selectPicturesState,
	(pictures) => pictures.isLoading,
)

export const selectPage = createSelector(
	selectPicturesState,
	(pictures) => pictures.page,
)

export default reducer
