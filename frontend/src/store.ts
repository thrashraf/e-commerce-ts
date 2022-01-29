import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducers } from './reducers/productsReducers';
import { productDetailReducers} from './reducers/productDetailReducers'

// ? redux setup
const reducer = combineReducers({
    productsReducers: productsReducers,
    productDetailReducers: productDetailReducers
});

const initialState = {};
const middleware = [thunk];

export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

