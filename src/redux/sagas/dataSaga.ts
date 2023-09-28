import { put } from "redux-saga/effects"
import { ReduxAction } from "../../utility/type"
import * as actionCreators from "../actions"
import * as serviceCreators from "./services"
import { toast } from "react-toastify"

// get data
export function* getDataSagaCall(action: ReduxAction): any {
  try {
    const res = yield serviceCreators.getDataService()
    if (res && res?.status === 201) {
      yield put(actionCreators.saveData(res?.data))
    }
    return
  } catch (error) {
    console.log(error, "getDataSagaCall")
  }
}

// send data
export function* sendDataSagaCall(action: ReduxAction): any {
  try {
    const res = yield serviceCreators.sendDataService(action?.data?.file)
    if (res && (res?.status === 201 || res?.status === 200)) {
      if (res?.data?.status === "SUCCESS") {
        return toast.success("Data Stored Successfully")
      }
    }
  } catch (error) {
    console.log(error, "sendDataSagaCall")
  }
}
