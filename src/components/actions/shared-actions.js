import { _getUsers, _getQuestions } from "../../redux/utils/_DATA";
import { getUser } from "./users";
import { getQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";

/* After making the call to the API we have to create the functions related to the
actions that both USER and QUESTION do
After relating them to actions.type, we return to the dispatch
*/

export function handleInitialData(){
    return (dispatch) =>{
        dispatch(showLoading());
        return  Promise.all([_getUsers(), _getQuestions()]).then((
            [users, questions]) =>{
                dispatch(getUser(users))
                dispatch(getQuestions(questions))
                dispatch(hideLoading());
                
        });
    };
}