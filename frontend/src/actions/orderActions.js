import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
} from "../constants/orderConstants";
import { CREATE_ORDER_ENDPOINT } from "../constants/apiConstants";
import axios from 'axios'

export const createOrderAction = (order) => async (dispatch, getState) => {
    try {
        dispatch({type: CREATE_ORDER_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(
            CREATE_ORDER_ENDPOINT,
            order,
            config
        )

        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}