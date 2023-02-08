// export const BASE_URL = "http://127.0.0.1:8000/api/"
const MODE  = process.env.REACT_APP_MODE
if(MODE === 'dev') {
    var BASE_URL = "http://127.0.0.1:8000/api/" 
} else if(MODE === 'prod') {
    var BASE_URL = "https://bigbasket.up.railway.app/api/"
    // var BASE_URL = "https://bigbasket-ppgf.onrender.com/api/"
}

export const GET_PRODUCTS_ENDPOINT = `${BASE_URL}products`
export const GET_TOP_PRODUCTS_ENDPOINT = `${BASE_URL}products/top/`
export const GET_SINGLE_PRODUCT_ENDPOINT = `${BASE_URL}products/`
export const DELETE_PRODUCT_ENDPOINT = `${BASE_URL}products/`
export const CREATE_PRODUCT_ENDPOINT = `${BASE_URL}products/create/`
export const EDIT_PRODUCT_ENDPOINT = `${BASE_URL}products/`
export const UPLOAD_PRODUCT_IMAGE = `${BASE_URL}products/upload/`
export const CREATE_PRODUCT_REVIEW = `${BASE_URL}products/`
export const GET_PRODUCT_CATEGORIES_ENDPOINT = `${BASE_URL}products/categories`
export const GET_PRODUCT_BRANDS_ENDPOINT = `${BASE_URL}products/brands`
export const GET_PRODUCT_COLORS_ENDPOINT = `${BASE_URL}products/colors`

export const USER_LOGIN_ENDPOINT = `${BASE_URL}users/login/`
export const USER_REGISTER_ENDPOINT = `${BASE_URL}users/register/`
export const GET_USER_DETAILS_ENDPOINT = `${BASE_URL}users/`
export const EDIT_USER_PROFILE_ENDPOINT = `${BASE_URL}users/profile/edit/`
export const GET_ALL_USERS_ENDPOINT = `${BASE_URL}users/`
export const DELETE_USER_ENDPOINT = `${BASE_URL}users/`
export const EDIT_USER_ENDPOINT = `${BASE_URL}users/`

export const CREATE_ORDER_ENDPOINT = `${BASE_URL}orders/create/`
export const GET_ALL_ORDERS_ENDPOINT = `${BASE_URL}orders/`
export const GET_SINGLE_ORDER_ENDPOINT = `${BASE_URL}orders/`
export const PAY_ORDER_ENDPOINT = `${BASE_URL}orders/`
export const DELIVER_ORDER_ENDPOINT = `${BASE_URL}orders/`
export const GET_USER_ORDERS_ENDPOINT = `${BASE_URL}orders/customer/`