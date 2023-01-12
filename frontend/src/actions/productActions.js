import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    TOP_PRODUCT_LIST_REQUEST,
    TOP_PRODUCT_LIST_SUCCESS,
    TOP_PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,

    PRODUCT_REVIEW_REQUEST,
    PRODUCT_REVIEW_SUCCESS,
    PRODUCT_REVIEW_FAIL,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,

    PRODUCT_EDIT_REQUEST,
    PRODUCT_EDIT_SUCCESS,
    PRODUCT_EDIT_FAIL,

    PRODUCT_CATEGORIES_REQUEST,
    PRODUCT_CATEGORIES_SUCCESS,
    PRODUCT_CATEGORIES_FAIL,

    PRODUCT_BRANDS_REQUEST,
    PRODUCT_BRANDS_SUCCESS,
    PRODUCT_BRANDS_FAIL,

    PRODUCT_COLORS_REQUEST,
    PRODUCT_COLORS_SUCCESS,
    PRODUCT_COLORS_FAIL,
} from "../constants/productConstants";
import { CREATE_PRODUCT_ENDPOINT, CREATE_PRODUCT_REVIEW, DELETE_PRODUCT_ENDPOINT, EDIT_PRODUCT_ENDPOINT, GET_PRODUCTS_ENDPOINT, GET_PRODUCT_BRANDS_ENDPOINT, GET_PRODUCT_CATEGORIES_ENDPOINT, GET_PRODUCT_COLORS_ENDPOINT, GET_SINGLE_PRODUCT_ENDPOINT, GET_TOP_PRODUCTS_ENDPOINT } from "../constants/apiConstants";
import axios from 'axios'

export const listProducts = (keyword='') => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})

        const {data} = await axios.get(`${GET_PRODUCTS_ENDPOINT}?keyword=${keyword}`)
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }
    catch(error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const listTopProducts = () => async (dispatch) => {
    try {
        dispatch({type: TOP_PRODUCT_LIST_REQUEST})

        const {data} = await axios.get(GET_TOP_PRODUCTS_ENDPOINT)
        dispatch({
            type: TOP_PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }
    catch(error) {
        dispatch({
            type: TOP_PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const listCategories = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_CATEGORIES_REQUEST})

        const {data} = await axios.get(GET_PRODUCT_CATEGORIES_ENDPOINT)
        dispatch({
            type: PRODUCT_CATEGORIES_SUCCESS,
            payload: data
        })
    }
    catch(error) {
        dispatch({
            type: PRODUCT_CATEGORIES_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const listBrands = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_BRANDS_REQUEST})

        const {data} = await axios.get(GET_PRODUCT_BRANDS_ENDPOINT)
        dispatch({
            type: PRODUCT_BRANDS_SUCCESS,
            payload: data
        })
    }
    catch(error) {
        dispatch({
            type: PRODUCT_BRANDS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const listColors = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_COLORS_REQUEST})

        const {data} = await axios.get(GET_PRODUCT_COLORS_ENDPOINT)
        dispatch({
            type: PRODUCT_COLORS_SUCCESS,
            payload: data
        })
    }
    catch(error) {
        dispatch({
            type: PRODUCT_COLORS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`${GET_SINGLE_PRODUCT_ENDPOINT}${id}/`)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }
    catch(error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_DELETE_REQUEST})

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.delete(
            `${DELETE_PRODUCT_ENDPOINT}${id}/delete/`,
            config
        )

        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const createProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_CREATE_REQUEST})

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
            CREATE_PRODUCT_ENDPOINT,
            product,
            config
        )

        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const editProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_EDIT_REQUEST})

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
            `${EDIT_PRODUCT_ENDPOINT}${product.id}/edit/`,
            product,
            config
        )

        dispatch({
            type: PRODUCT_EDIT_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: PRODUCT_EDIT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const reviewProduct = (review) => async (dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_REVIEW_REQUEST})

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
            `${CREATE_PRODUCT_REVIEW}${review.id}/review/`,
            review,
            config
        )

        dispatch({
            type: PRODUCT_REVIEW_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: PRODUCT_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}