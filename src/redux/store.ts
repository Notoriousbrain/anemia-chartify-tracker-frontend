import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"
import rootReducer from "./reducers"
import mySaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware, logger],
})

sagaMiddleware.run(mySaga)

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
