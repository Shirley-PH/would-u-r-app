import { combineReducers } from "redux";
import { authedUserR } from "./authedUserR";
import questionsR from "./questionsR";
import usersR from "./usersR";

export const rootReducer = combineReducers({
    authedUser: authedUserR,
    questions: questionsR,
    users: usersR, 
}); 