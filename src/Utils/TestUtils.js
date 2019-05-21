import {applyMiddleware, createStore } from 'redux';
import reducers from './../Reducers';
import { middlewares } from './../Store/Store';


export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test]=${attr}`);
    return wrapper;
};



export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(reducers, initialState);
};



