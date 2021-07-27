import axios from 'axios'
import {BASE_URL, API_KEY} from 'env'

const instance = axios.create({
	baseURL: BASE_URL,
})

instance.defaults.headers.common.Authorization = API_KEY

instance.interceptors.response.use(
	function (response) {
		return response.data
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error)
	},
)

export default instance
