import { SET_AUTHED_USERS } from "../constants";

/*This function will connect with the action of the authedUser this conditional that it will receive with the _DATA*/

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