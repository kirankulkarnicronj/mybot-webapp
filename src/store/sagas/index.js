import { apiFormKeySaga } from "../ApiForm/ApiFormSaga";
import { all } from "redux-saga/effects";

export function* watchSagas() {
  yield all([apiFormKeySaga()]);
}
