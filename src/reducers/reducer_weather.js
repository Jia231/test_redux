import { FETCH_WEATHER,CURRENT_LOCATION_WEATHER } from '../actions/index';

const initial_state = {init:null,current:null}

const weather = function(state=initial_state,action){
    switch(action.type){
        
        case FETCH_WEATHER :
            return {...state,init: action.payload};
        break;
        case CURRENT_LOCATION_WEATHER:
        //console.log('this is the payload',action.payload)
            return {...state,current:action.payload}

    }
    return state
}

export default weather;