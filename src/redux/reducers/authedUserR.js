import { SET_AUTHED_USERS } from "../constants";

export function authedUserR( state={ loggeIn:false, userId:''}, action) {
    
    switch(action.type){
        case SET_AUTHED_USERS:
            return {
                ...state,
                userId: action.payload,
                loggeIn: true,
            }
      
        default:
            return state
    }
}