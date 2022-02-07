import { GET_USER, GET_ANSWER, GET_QUESTION } from "../constants";

export default function usersR(state={}, action){
    
    switch(action.type){
    case GET_USER :
        return {
            ...state,
            ...action.users
        }
    case GET_QUESTION:
        return {
            ...state,
            [action.question.author]:{
                ...state[action.question.author],
               questions:[
                   ...state[action.question.author].questions, 
               action.question.id] 
            },
        };

    case GET_ANSWER :
        
        return {
            ...state,
            [action.username]: {
            ...state[action.username],
            answers: {
                ...state[action.username].answers,
                [action.questionId]: action.answer,
                },
            },
        };

        default:
            return state
    }
}