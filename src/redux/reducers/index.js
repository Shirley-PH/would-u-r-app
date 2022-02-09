import { combineReducers } from "redux";
import { authedUserR } from "./authedUserR";
import questionsR from "./questionsR";
import usersR from "./usersR";

/* combineReducer helps Redux functions (question, users, authedUser)
which are different functions, there was a single reducer function that can be stopped by createSore
*/
export const rootReducer = combineReducers({
    authedUser: authedUserR,
    questions: questionsR,
    users: usersR, 
}); 