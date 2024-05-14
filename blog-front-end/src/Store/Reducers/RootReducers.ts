import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";

const rootReducer = combineReducers({
    userStateData:UserReducer
})

export default rootReducer