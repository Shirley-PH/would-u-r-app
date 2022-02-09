import { GET_QUESTIONS } from "../constants"
import { GET_QUESTION, GET_ANSWER} from "../constants";

/* The conditional handles the 3 types of situations that can happen with a Question: GET_QUESTION, GET_ANSWER, GET_QUESTION.
Will connect to the actions that correspond to action-question*/
export default function questionsR(state=[], action){

    switch(action.type){
        case GET_QUESTIONS:
                return action.questions; 
        case GET_ANSWER:
                return {
                    ...state,    
                    [action.questionId]: {
                      ...state[action.questionId],
                      [action.answer]: {
                        ...state[action.questionId][action.answer],
                        votes: state[action.questionId][action.answer].votes.concat([action.username])
                      }
                    }
               };
               case GET_QUESTION: 
               return {
        
                    ...state,
                    [action.question.id]: action.question
                };
               default: return state
             
    }
}