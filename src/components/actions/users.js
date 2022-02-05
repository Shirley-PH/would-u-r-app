import { GET_USER } from "../../redux/constants"

export function getUser(users){
    return{
        type: GET_USER,
        users,
    }
}