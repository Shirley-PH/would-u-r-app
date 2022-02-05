import { _getUsers, _getQuestions } from "../../redux/utils/_DATA";
import { getUser } from "./users";
import { getQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";

/* Tras hacer la llamada a la API tenemos que crear las funciones relacionadas con las
acciones que hace tanto USER como QUESTION
Después de relacionarlas con acciones.type, devolvemos al dispatch
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