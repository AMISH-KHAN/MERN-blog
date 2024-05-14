import { Reducer } from "redux";
import {  ADD_USER_RED, DELETE_USER_RED, GET_USER_RED, UPDATE_USER_RED } from "../Constants";
import { userDatatype } from "../../types/types";


type dataState = {
    user: userDatatype[];
}

const initialState: dataState = {
    user: [],
    // Initialize other state properties if needed
  };

type actionType = {
    type:string
    data: userDatatype
}


export const UserReducer: Reducer<dataState, actionType> = (state = initialState, action: actionType) => {
    console.log(action)
    switch (action.type) {
        case ADD_USER_RED:
            
            return {
                ...state,
                user:[...state.user, action.data]
            }
            
            case UPDATE_USER_RED:
                return {
                    ...state,
                    user:state.user.map((item) => (item.id === action.data.id ? action.data : item))
                }
                
                case GET_USER_RED:
            console.log("reducer",action.data)
            return {
                ...state,
                user: [action.data],
            }
        
        case DELETE_USER_RED:
            return {
                ...state,
                user: state.user.filter((item) => item.id !== action.data.id),
            };
        default:
            return state
    }
}