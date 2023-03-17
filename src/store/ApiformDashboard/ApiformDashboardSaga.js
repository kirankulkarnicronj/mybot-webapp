import { call, put } from "redux-saga/effects";
import * as ACTIONS from "./ApiformDashboardAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./ApiformDashboardTypes";
import apiJunction from "../../utils/api";
import { serverAddress } from "../../config";
export function* apiFormKeyDashboard(action) {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "post",
      url: `${serverAddress}/api/v1/player/info`,
      body: action.payload,
    });
    if (result && result.data) {
      yield put(ACTIONS.apiFormKeyDashboardSuccess(result));
    }
  } catch (e) {
    yield put(ACTIONS.apiFormKeyDashboardError(e.response));
  }
}

export function* apiFormKeyDashboardSaga() {
  yield takeLatest(TYPES.APIFORMKEY_DASHBOARD, apiFormKeyDashboard);
}
