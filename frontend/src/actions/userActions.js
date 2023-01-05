import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_LOGOUT,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    USER_EDIT_PROFILE_REQUEST,
    USER_EDIT_PROFILE_SUCCESS,
    USER_EDIT_PROFILE_FAIL,
} from "../constants/userConstants";
import { USER_LOGIN_ENDPOINT, USER_REGISTER_ENDPOINT, GET_USER_DETAILS_ENDPOINT, EDIT_USER_PROFILE_ENDPOINT } from "../constants/apiConstants";
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type: USER_LOGIN_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post(
            USER_LOGIN_ENDPOINT,
            {'username': email, 'password': password},
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({type: USER_REGISTER_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post(
            USER_REGISTER_ENDPOINT,
            {'name': name, 'email': email, 'password': password},
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: USER_DETAILS_REQUEST})

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
            `${GET_USER_DETAILS_ENDPOINT}${id}/`,
            config
        )

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const editUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({type: USER_EDIT_PROFILE_REQUEST})

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
            EDIT_USER_PROFILE_ENDPOINT,
            user,
            config
        )

        dispatch({
            type: USER_EDIT_PROFILE_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: USER_EDIT_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: USER_LOGOUT
    })
}