import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    CREATE_ORDER_RESET,

    GET_ORDER_DETAILS_REQUEST,
    GET_ORDER_DETAILS_SUCCESS,
    GET_ORDER_DETAILS_FAIL,
} from "../constants/orderConstants";

export const createOrderReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                loading: true
            }

        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            }

        case CREATE_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CREATE_ORDER_RESET:
            return {}

        default:
            return state
    }
}

export const orderDetailsReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_ORDER_DETAILS_REQUEST:
            return {
                loading: true
            }

        case GET_ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }

        case GET_ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}