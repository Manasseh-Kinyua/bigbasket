import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,

    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_LOGOUT,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    USER_DETAILS_FOR_ADMIN_REQUEST,
    USER_DETAILS_FOR_ADMIN_SUCCESS,
    USER_DETAILS_FOR_ADMIN_FAIL,

    USER_EDIT_PROFILE_REQUEST,
    USER_EDIT_PROFILE_SUCCESS,
    USER_EDIT_PROFILE_FAIL,

    USER_EDIT_DETAILS_REQUEST,
    USER_EDIT_DETAILS_SUCCESS,
    USER_EDIT_DETAILS_FAIL,
} from "../constants/userConstants";
import { USER_LOGIN_ENDPOINT, USER_REGISTER_ENDPOINT, GET_USER_DETAILS_ENDPOINT, EDIT_USER_PROFILE_ENDPOINT, GET_ALL_USERS_ENDPOINT, DELETE_USER_ENDPOINT, EDIT_USER_ENDPOINT } from "../constants/apiConstants";
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

    } catch(error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getUserDetailsForAdmin = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: USER_DETAILS_FOR_ADMIN_REQUEST})

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
            type: USER_DETAILS_FOR_ADMIN_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: USER_DETAILS_FOR_ADMIN_FAIL,
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

        const {data} = await axios.put(
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
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error) {
        dispatch({
            type: USER_EDIT_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const editUserDetails = (user) => async (dispatch, getState) => {
    try {
        dispatch({type: USER_EDIT_DETAILS_REQUEST})

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
            `${EDIT_USER_ENDPOINT}${user.id}/edit/`,
            user,
            config
        )

        dispatch({
            type: USER_EDIT_DETAILS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: USER_EDIT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getAllUsers = () => async (dispatch, getState) => {
    try {
        dispatch({type: USER_LIST_REQUEST})

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
            GET_ALL_USERS_ENDPOINT,
            config
        )

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const deleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: DELETE_USER_REQUEST})

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
            `${DELETE_USER_ENDPOINT}${id}/delete/`,
            config
        )

        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: DELETE_USER_FAIL,
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