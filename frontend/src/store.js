import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userDeleteReducer, userDetailsForAdminReducer, userDetailsReducer, userEditProfileReducer, userListReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { createOrderReducer, orderDetailsReducer, orderPayReducer, userOrdersReducer } from './reducers/orderReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,

    cart: cartReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userDetailsForAdmin: userDetailsForAdminReducer,
    userEditProfile: userEditProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,

    createOrder: createOrderReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    userOrders: userOrdersReducer,
})

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}

const paymentMethodFromLocalStorage = localStorage.getItem('paymentMethod') ?
    JSON.parse(localStorage.getItem('paymentMethod')) : {}

const initialState = {
    cart: {cartItems: cartItemsFromLocalStorage, shippingAddress: shippingAddressFromLocalStorage, paymentMethod: paymentMethodFromLocalStorage},
    userLogin: {userInfo: userInfoFromLocalStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store