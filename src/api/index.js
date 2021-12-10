import axios from 'axios'
import {setData} from '../store/actions'

export const getData = () => {

    return async(dispatch) => {

        const {data} = await axios.get('http://localhost:8000/posts')
        dispatch(setData(configData(data, 'isActive', false)))

    }   
}

const configData = (data, field = "defaultKey", value = null) => {
    return data.map((el, idx) => idx === 0 ? ({ ...el, [field]: !value }) : ({ ...el, [field]: value }));
}