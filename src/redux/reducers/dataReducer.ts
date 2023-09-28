import { UserActions } from "../../utility/type"
import * as actionTypes from "../actions/actionTypes"

// login status reducer
export const dataReducer = (state = [], { type, data }: UserActions) => {
  switch (type) {
    case actionTypes.SAVE_DATA:
      return {
        ...state,
        data,
      }
    default:
      return state
  }
}
