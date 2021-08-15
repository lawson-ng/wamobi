import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectAll} from './PicturesSlice'

const HOC = (controller) => {
	const [page, setPage] = useState(1)
	const [isLoading, setIsLoading] = useState(false)

	const dispatch = useDispatch()

	return {
		data: controller().data,
	}
}

const PictureController = (props) => {
	const data = useSelector(selectAll)
	return {data}
}

export default HOC(PictureController)
