import { takeLatest } from "redux-saga/effects"
import * as actionTypes from "../actions/actionTypes"
import * as userGenerators from "./dataSaga"

export default function* mySaga() {
  yield takeLatest(actionTypes.GET_DATA, userGenerators.getDataSagaCall)
  yield takeLatest(actionTypes.POST_DATA, userGenerators.sendDataSagaCall)
}
