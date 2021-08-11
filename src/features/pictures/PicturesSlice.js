import {
	createAsyncThunk,
	createEntityAdapter,
	createSelector,
	createSlice,
} from '@reduxjs/toolkit'
import API from 'utilities/api'

const perPage = 20

const pictureAdapter = createEntityAdapter()

const initialState = pictureAdapter.getInitialState({
	isLoading: false,
	page: 1,
})

export const fetchPictures = createAsyncThunk(
	'pictures/fetchPictures',
	async (params = {}) => {
		const {nextPage = 1} = params
		console.tron('nextPage', nextPage)

		const response = await API.get('curated', {
			params: {
				page: nextPage,
				per_page: perPage,
			},
		})
		return {data: response.photos, page: nextPage}
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
