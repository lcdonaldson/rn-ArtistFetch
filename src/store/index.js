import {createStore, compose} from 'redux';
import rootReducer from '../actions';


const initialState = {};
const enhancers = [];

const store = createStore(
    rootReducer,
    initialState,
    enhancers
);

export default store