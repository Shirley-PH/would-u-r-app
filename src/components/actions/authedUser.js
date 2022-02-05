import { SET_AUTHED_USERS } from "../../redux/constants"

export  function setAuthed(userId){
    return {
        type: SET_AUTHED_USERS,
        payload: userId, 
    }
    
}