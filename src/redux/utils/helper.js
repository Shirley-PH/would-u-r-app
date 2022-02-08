import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";
import { showLoading, hideLoading } from "react-redux-loading";
import {getQuestion, getAnswer} from "../../components/actions/questions"


export function saveQuestion(optionOneText, optionTwoText, author){
    return (dispatch) =>{
        dispatch(showLoading());
        _saveQuestion({ optionOneText, optionTwoText, author }).then((question) => {
          
    
          dispatch(getQuestion(question));
          dispatch(hideLoading());
        });
    } 
}
export function saveQuestionAnswer({authedUser, questionId, answerId}){
    return (dispatch) => {
        dispatch(showLoading());
        _saveQuestionAnswer({authedUser, qid: questionId, answer: answerId}).then((answer) => {
          dispatch(getAnswer(authedUser, questionId, answerId));
          dispatch(hideLoading());
        });
      };
}