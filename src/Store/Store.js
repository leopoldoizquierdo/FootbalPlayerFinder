import { createStore, applyMiddleware } from 'redux';
import reducers from './../Reducers';
import thunk from 'redux-thunk';



export const middlewares = [thunk];

//const initialState = {};

//const store = createStore(reducers); 

/*
const store = createStore(
    reducers, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

*/

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(reducers)

export default store;