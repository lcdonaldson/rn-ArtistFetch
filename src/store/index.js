import {createStore, compose} from 'redux';
import rootReducer from '../actions';


const initialState = {};
// const enhancers = []; // add if needed.

const store = createStore(
    rootReducer,
    initialState,
    // enhancers
);

export default store