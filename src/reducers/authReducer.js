import { FETCH_USER } from '../actions/types'

export default function(state = {}, action){ 
    console.log(action,"action started")
    switch(action.type) {
        case FETCH_USER:
        return action.payload || false;
        default:
        return state;
    }
}