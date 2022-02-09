import {GET_ANSWER, GET_QUESTION, GET_QUESTIONS } from '../../redux/constants'


/* These functions correspond to Question and will connect to Redux after the API call*/

export function getQuestions(questions){
    return{
        type: GET_QUESTIONS,
        questions,
    }
}


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
    };
}