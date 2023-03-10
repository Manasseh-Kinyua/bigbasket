import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    CREATE_ORDER_RESET,

    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL,

    PAY_ORDER_REQUEST,
    PAY_ORDER_SUCCESS,
    PAY_ORDER_FAIL,
    PAY_ORDER_RESET,

    DELIVER_ORDER_REQUEST,
    DELIVER_ORDER_SUCCESS,
    DELIVER_ORDER_FAIL,
    DELIVER_ORDER_RESET,

    GET_ORDER_DETAILS_REQUEST,
    GET_ORDER_DETAILS_SUCCESS,
    GET_ORDER_DETAILS_FAIL,

    GET_USER_ORDERS_REQUEST,
    GET_USER_ORDERS_SUCCESS,
    GET_USER_ORDERS_FAIL,
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

export const orderListReducer = (state = {orders:[]}, action) => {
    switch(action.type) {
        case ORDER_LIST_REQUEST:
            return {
                loading: true
            }

        case ORDER_LIST_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }

        case ORDER_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

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

export const orderPayReducer = (state = {}, action) => {
    switch(action.type) {
        case PAY_ORDER_REQUEST:
            return {
                loading: true
            }

        case PAY_ORDER_SUCCESS:
            return {
                loading: false,
                success: true,
            }

        case PAY_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case PAY_ORDER_RESET:
            return {}

        default:
            return state
    }
}

export const orderDeliverReducer = (state = {}, action) => {
    switch(action.type) {
        case DELIVER_ORDER_REQUEST:
            return {
                loading: true
            }

        case DELIVER_ORDER_SUCCESS:
            return {
                loading: false,
                success: true,
            }

        case DELIVER_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case DELIVER_ORDER_RESET:
            return {}

        default:
            return state
    }
}

export const userOrdersReducer = (state = {orders:[]}, action) => {
    switch(action.type) {
        case GET_USER_ORDERS_REQUEST:
            return {
                loading: true
            }

        case GET_USER_ORDERS_SUCCESS:
            return {
                loading: false,
                orders: action.payload,
            }

        case GET_USER_ORDERS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}