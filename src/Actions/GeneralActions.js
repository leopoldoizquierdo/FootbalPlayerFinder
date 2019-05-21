import { 
    LIST_ACTION_FILTER_PLAYERS, 
    ACTION_SHOW_LOADER, 
    ACTION_HIDE_LOADER,
    ACTION_SET_ERROR_GETTING_DATA 
} from './Types';
import { yearsBetween, parseDateFrom_yyyy_MM_dd } from './../Utils';
import Axios from 'axios';


export const refineData = (data, name, position, age) => {
    data = data.map((elem) => {
        elem.age=yearsBetween(new Date(), parseDateFrom_yyyy_MM_dd(elem.dateOfBirth));
        return elem;
    });
    data = data.filter((elem) => {
        let flag = true;
        if(name !== '' && name !== undefined){
            flag = flag && elem.name.toLowerCase().includes(name.toLowerCase())
        }
        if(position !== '' && position !== undefined){
            flag = flag && elem.position === position
        }
        if(age !== '' && age !== undefined){
            flag = flag && elem.age === parseInt(age)
        }
        return flag;
    });
    return data;
}

export const listActionFilterPlayers = (name, position, age) => {
    return async (dispatch) => {
        dispatch(actionShowLoader());
        await Axios.get('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
        .then(res => {
            var data = res.data;
            
            dispatch(actionHideLoader());
            dispatch(actionSetErrorGettingData(false));
            return dispatch({
                type: LIST_ACTION_FILTER_PLAYERS,
                payload: refineData(data, name, position, age)
            });
        })
        .catch(data => {
            dispatch(actionSetErrorGettingData(true));
        })
    }
}


const actionShowLoader = () => ({
    type: ACTION_SHOW_LOADER
})

const actionHideLoader = () => ({
    type: ACTION_HIDE_LOADER
})



const actionSetErrorGettingData = (value) => ({
    type: ACTION_SET_ERROR_GETTING_DATA,
    payload: value
})




export const generalActions = {
    listActionFilterPlayers,
};








