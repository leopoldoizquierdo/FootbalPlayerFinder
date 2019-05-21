import {ACTION_EXAMPLE_1, ACTION_EXAMPLE_2} from './../Actions/Types';
import exampleReducer from './ExampleReducer';



describe('Example Reducer', () => {
    it('should return default state', () => {
        const initialState = {
            example_param_1: [],
            example_param_2: {}
        };
        const newState = exampleReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('should return ACTION_EXAMPLE_1 state', () => {
        const state = {
            example_param_1: [1],
            example_param_2: {}
        };
        const newState = exampleReducer(undefined, {
            type: ACTION_EXAMPLE_1,
            payload: 1
        });
        expect(newState).toEqual(state);
    });


    it('should return ACTION_EXAMPLE_2 state', () => {
        const state = {
            example_param_1: [],
            example_param_2: {param: 'param'}
        };
        const newState = exampleReducer(undefined, {
            type: ACTION_EXAMPLE_2,
            payload: {param: 'param'}
        });
        expect(newState).toEqual(state);
    });

 

});