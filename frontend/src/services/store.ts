import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducers } from './product/productsReducers';
import { productDetailReducers} from './product/productById/productDetailReducers'
import { loginReducer } from './auth/login/loginReducer';
import { signupReducers } from './auth/signup/signupReducers';
import { modalReducers } from './modal/modalReducers';
import { addressReducer } from './user-config/addressReducer';
import { cartReducer } from './cart/cartReducer';

// ? redux setup
const reducer = combineReducers({
    productsReducers,
    productDetailReducers,
    loginReducer,
    signupReducers,
    modalReducers,
    addressReducer,
    cartReducer,
});

const initialState = {};
const middleware = [thunk];

export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

