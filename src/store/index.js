import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watchSagas } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];
let composeEnhancers = compose;

const { createLogger } = require("redux-logger");
const logger = createLogger();
middleware = [sagaMiddleware, logger];
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(watchSagas);

export default store;
