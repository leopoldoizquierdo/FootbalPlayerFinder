
import { 
    LIST_ACTION_FILTER_PLAYERS, 
    ACTION_SHOW_LOADER, 
    ACTION_HIDE_LOADER,
    ACTION_SET_ERROR_GETTING_DATA 
} from '../Actions/Types';


const initialState = {
    list_players: [],
    display_button_loader: false,
    error_getting_data: false
};


export default (state = initialState, action) => {
    //console.log(`GeneralReducer -- type =  ${action.type}`);
    //console.log(`GeneralReducer -- payload =  ${action.payload}\n\n`);
    switch(action.type){
        case LIST_ACTION_FILTER_PLAYERS:
            return  {
                ...state,
                list_players: action.payload
            };
        case ACTION_SHOW_LOADER:
            return  {
                ...state,
                display_button_loader: true
            };
        case ACTION_HIDE_LOADER:
            return  {
                ...state,
                display_button_loader: false
            };
        case ACTION_SET_ERROR_GETTING_DATA:
            return {
                ...state,
                error_getting_data: action.payload
            };
        default:
            return state;
    }
}


