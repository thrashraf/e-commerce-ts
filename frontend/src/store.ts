import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducers } from './reducers/productsReducers';
import { productDetailReducers} from './reducers/productDetailReducers'
import { loginReducer } from './reducers/loginReducer';
import { signupReducers } from './reducers/signupReducers';
import { modalReducers } from './reducers/modalReducers';
import { addressReducer } from './reducers/addressReducer';

// ? redux setup
const reducer = combineReducers({
    productsReducers,
    productDetailReducers,
    loginReducer,
    signupReducers,
    modalReducers,
    addressReducer
});

const initialState = {};
const middleware = [thunk];

export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

