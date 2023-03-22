import { combineReducers, configureStore } from '@reduxjs/toolkit';
import changeTodoActionReducer from '../reducers/reducers/changeTodoActionReducer';

const rootReducer = combineReducers({
    changeTodoActionReducer:changeTodoActionReducer,
    //add multiple reducers here in future
})

const store = configureStore({reducer:rootReducer});
export default store;
