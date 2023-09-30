import * as actionTypes from "../redux/actions/actionTypes";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

// redux hooks
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// reducer interfaces
export type UserActions =
  | SaveDataInterface
  | GetDataInterface
  | SendDataInterface;

// recieving data interfaces
export interface GetDataInterface {
  type: typeof actionTypes.GET_DATA;
  data?: null;
}

// saving data interfaces
export type saveRequestData = {
  data: Array<Object>;
};
export interface SaveDataInterface {
  type: typeof actionTypes.SAVE_DATA;
  data: saveRequestData;
}

// sending data interfaces
export type sendRequestData = {
  file: FormData;
  // dispatch: AppDispatch;
};
export interface SendDataInterface {
  type: typeof actionTypes.POST_DATA;
  data: sendRequestData;
}

// redux action interface
export interface ReduxAction {
  type: string;
  data?: any;
}
