import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import exampleReducer from './../Reducers/ExampleReducer';
import generalReducer from '../Reducers/GeneralReducer';

const reducers = combineReducers({
    exampleReducer, //exampleReducer: exampleReducer
    generalReducer,
    form
})


export default reducers;

