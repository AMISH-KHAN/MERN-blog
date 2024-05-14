import { ADD_USER, GET_USER, UPDATE_USER, DELETE_USER, FIND_USER } from "../Constants"; 
import { userDatatype,getActionDatatype, userObject, postActionDatatype, findActionDatatype } from "../../types/types";
//Action creators are has action objects containing type(type of action) and payload ie data


export function addUser(data: userDatatype): postActionDatatype {
    console.log("action",data)
    return {
        type: ADD_USER,
        payload:data
    }
}


export function getUser() {
    return {
        type: GET_USER,
    }
}
export function findUser(useData:userObject):findActionDatatype {
    return {
        type: FIND_USER,
        payload:useData
    }
}


export function updateUser(data:userDatatype):postActionDatatype {
    return {
        type: UPDATE_USER,
        payload:data
    }
}


export function deleteUser(data:userDatatype):postActionDatatype {
    return {
        type: DELETE_USER,
        payload:data
    }
}