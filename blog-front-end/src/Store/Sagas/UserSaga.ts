import { take, put, takeEvery } from "redux-saga/effects";
import {createUserApi, deleteUserApi, findUserApi, getUserApi, putUserApi} from "../Service.ts"
import { ADD_USER, DELETE_USER, FIND_USER, GET_USER, GET_USER_RED, UPDATE_USER } from "../Constants.ts";
import { findActionDatatype, postActionDatatype } from "../../types/types.tsx";



function* createUserSaga(action: postActionDatatype): Generator<any, void, any> {
    // console.log("saga",action)
    let response = yield createUserApi(action.payload)
    yield put({type:GET_USER_RED,payload:response})
}

function* updateUserSaga(action:postActionDatatype): Generator<any, void, any> {
    let response = yield putUserApi(action.payload)
    yield put({type:GET_USER_RED,payload:response})
}

function* getUserSaga(): Generator<any, void, any> {
    let response = yield getUserApi()
    console.log("saga",response)
    yield put({type:GET_USER_RED,payload:response})
}

function* findUserSaga(action:findActionDatatype): Generator<any, void, any> {
    let response = yield findUserApi(action.payload)
    console.log("saga",response)
    yield put({type:GET_USER_RED,payload:response})
}

function* deleteUserSaga(action:postActionDatatype): Generator<any, void, any> {
    let response = yield deleteUserApi(action.payload)
    yield put({type:GET_USER_RED,payload:response})
}

export function* userSaga() {
    yield takeEvery(ADD_USER,createUserSaga)
    yield takeEvery(UPDATE_USER,updateUserSaga)
    yield takeEvery(GET_USER,getUserSaga)
    yield takeEvery(FIND_USER,findUserSaga)
    yield takeEvery(DELETE_USER,deleteUserSaga)
}