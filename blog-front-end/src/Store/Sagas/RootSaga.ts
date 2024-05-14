import { all } from "redux-saga/effects";
import { userSaga } from "./UserSaga";



export  function* rootSaga() {
    yield all([
        userSaga()
    ])
}