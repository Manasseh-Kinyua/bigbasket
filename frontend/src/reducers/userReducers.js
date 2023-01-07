import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    USER_DETAILS_FOR_ADMIN_REQUEST,
    USER_DETAILS_FOR_ADMIN_SUCCESS,
    USER_DETAILS_FOR_ADMIN_FAIL,
    USER_DETAILS_FOR_ADMIN_RESET,

    USER_EDIT_PROFILE_REQUEST,
    USER_EDIT_PROFILE_SUCCESS,
    USER_EDIT_PROFILE_FAIL,
    USER_EDIT_PROFILE_RESET,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true
            }

        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }

        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true
            }

        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }

        case USER_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const userDetailsReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_DETAILS_REQUEST:
            return {
                loading: true
            }

        case USER_DETAILS_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }

        case USER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const userDetailsForAdminReducer = (state = {user:{}}, action) => {
    switch(action.type) {
        case USER_DETAILS_FOR_ADMIN_REQUEST:
            return {
                loading: true
            }

        case USER_DETAILS_FOR_ADMIN_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }

        case USER_DETAILS_FOR_ADMIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case USER_DETAILS_FOR_ADMIN_RESET:
            return {user:{}}

        default:
            return state
    }
}

export const userEditProfileReducer = (state = {user:{}}, action) => {
    switch(action.type) {
        case USER_EDIT_PROFILE_REQUEST:
            return {
                loading: true
            }

        case USER_EDIT_PROFILE_SUCCESS:
            return {
                loading: false,
                success: true,
                userInfo: action.payload
            }

        case USER_EDIT_PROFILE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case USER_EDIT_PROFILE_RESET:
            return {user:{}}

        default:
            return state
    }
}

export const userListReducer = (state = {users:[]}, action) => {
    switch(action.type) {
        case USER_LIST_REQUEST:
            return {
                loading: true
            }

        case USER_LIST_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }

        case USER_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const userDeleteReducer = (state = {}, action) => {
    switch(action.type) {
        case DELETE_USER_REQUEST:
            return {
                loading: true
            }

        case DELETE_USER_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case DELETE_USER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}