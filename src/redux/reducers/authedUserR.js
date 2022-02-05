import { SET_AUTHED_USERS } from "../constants";

export function authedUserR( state={ loggedIn:false, userId:''}, action) {
    
    switch(action.type){
        case SET_AUTHED_USERS:
            return {
                ...state,
                userId: action.payload,
                loggedIn: true,
            }
      
        default:
            return state
    }
}