import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,

    PAY_ORDER_REQUEST,
    PAY_ORDER_SUCCESS,
    PAY_ORDER_FAIL,
    PAY_ORDER_RESET,

    GET_ORDER_DETAILS_REQUEST,
    GET_ORDER_DETAILS_SUCCESS,
    GET_ORDER_DETAILS_FAIL,

    GET_USER_ORDERS_REQUEST,
    GET_USER_ORDERS_SUCCESS,
    GET_USER_ORDERS_FAIL,
} from "../constants/orderConstants";
import { CREATE_ORDER_ENDPOINT, GET_SINGLE_ORDER_ENDPOINT, GET_USER_ORDERS_ENDPOINT, PAY_ORDER_ENDPOINT } from "../constants/apiConstants";
import { CART_CLEAR } from "../constants/cartConstants";
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

        dispatch({
            type: CART_CLEAR,
        })
        localStorage.removeItem('cartItems')
    } catch(error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: GET_ORDER_DETAILS_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `${GET_SINGLE_ORDER_ENDPOINT}${id}`,
            config
        )

        dispatch({
            type: GET_ORDER_DETAILS_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: GET_ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const payOrder = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: PAY_ORDER_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            `${PAY_ORDER_ENDPOINT}${id}/pay/`,
            config
        )

        dispatch({
            type: PAY_ORDER_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: PAY_ORDER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getUserOrders = () => async (dispatch, getState) => {
    try {
        dispatch({type: GET_USER_ORDERS_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            GET_USER_ORDERS_ENDPOINT,
            config
        )

        dispatch({
            type: GET_USER_ORDERS_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: GET_USER_ORDERS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}