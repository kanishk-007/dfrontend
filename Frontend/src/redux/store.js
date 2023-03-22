import { reducer } from "./reducer";
import { configureStore } from '@reduxjs/toolkit'
import userDataWatcher from '../saga/saga'
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore(
  {
    reducer: reducer,
    middleware: () => [sagaMiddleware]
  }
)
sagaMiddleware.run(userDataWatcher)
export default store;
