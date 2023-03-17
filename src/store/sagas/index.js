import { apiFormKeySaga } from "../ApiForm/ApiFormSaga";
import { apiFormKeyDashboardSaga } from "../ApiformDashboard/ApiformDashboardSaga";
import { all } from "redux-saga/effects";

export function* watchSagas() {
  yield all([apiFormKeySaga(), apiFormKeyDashboardSaga()]);
}
