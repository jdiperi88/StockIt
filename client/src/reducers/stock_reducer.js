import {
    FETCH_MESSAGE,
    GET_STOCK   
} from '../actions/types';

export default function(state = {}, action){
    switch(action.type) {
        case FETCH_MESSAGE:
         return {...state, message: action.payload};
        case GET_STOCK:
        return {...state, stock: action.payload,
                          stockDataLoaded: false};
    }

    return state;
}