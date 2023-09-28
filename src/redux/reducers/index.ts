import { combineReducers } from "redux"
import { dataReducer } from "./dataReducer"
const rootReducer = combineReducers({
  data: dataReducer,
})

export type LoadState = ReturnType<typeof rootReducer>

export default rootReducer
