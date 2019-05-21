import {ACTION_EXAMPLE_1, ACTION_EXAMPLE_2} from './../Actions/Types';

const initialState = {
    example_param_1: [],
    example_param_2: {}
};


export default (state = initialState, action) => {
    //console.log(`ExampleReducer -- type =  ${action.type}`);
    //console.log(`ExampleReducer -- payload =  ${action.payload}\n\n`);
    switch(action.type){
        case ACTION_EXAMPLE_1:
            return  {
                ...state,
                example_param_1: [...state.example_param_1, action.payload]
            };
        case ACTION_EXAMPLE_2:
            return  {
                ...state,
                example_param_2: action.payload
            };
        default:
            return state;
    }
}





/*
const exampleReducer = (state=[0], action) => {
    console.log(action.type);
    console.log(action.payload);
    switch(action.type){
        case 'AUMENTAR_REDUCER_PRUEBA':
            return [...state, 1];
        default:
            return state;
    }
};
*/


