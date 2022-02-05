import {GET_ANSWER, GET_QUESTION, GET_QUESTIONS } from '../../redux/constants'

export function getQuestions(questions){
    return{
        type: GET_QUESTIONS,
        questions,
    }
}

/* esta parte va con ACTION => SHARED */
export function getQuestion(question){
    return{
        type: GET_QUESTION,
        question, 
    }

}

export function getAnswer(username, questionId, answer){
    return{
        type: GET_ANSWER,
        username,
        questionId,
        answer,
    } 
}